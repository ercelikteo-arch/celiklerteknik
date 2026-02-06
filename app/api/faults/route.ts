import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { faultCreateSchema, sanitizeObject } from '@/lib/validation'
import { notifyNewFault } from '@/lib/email'
import { checkRateLimit, RATE_LIMITS, rateLimitResponse } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  // Rate limit kontrolü
  const rateLimit = checkRateLimit(request, RATE_LIMITS.publicForm, 'faults')
  if (!rateLimit.success) {
    return rateLimitResponse(rateLimit.resetIn)
  }

  try {
    const body = await request.json()
    const validation = faultCreateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: 'Geçersiz veri' }, { status: 400 })
    }

    const data = sanitizeObject(validation.data)

    const fault = await prisma.faultReport.create({
      data: {
        name: data.name,
        phone: data.phone,
        service: data.service,
        description: data.description,
        images: data.images || [],
      }
    })

    // Email bildirimi gönder (hata olsa bile form kaydını bozma)
    notifyNewFault({
      name: fault.name,
      phone: fault.phone,
      service: fault.service,
      description: fault.description,
    }).catch((err) => console.error('Email notification error:', err))

    return NextResponse.json({ success: true, id: fault.id })
  } catch (error) {
    console.error('Fault report create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
