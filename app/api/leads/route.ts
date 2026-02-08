import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { leadCreateSchema, sanitizeObject } from '@/lib/validation'
import { notifyNewLead } from '@/lib/email'
import { checkRateLimit, RATE_LIMITS, rateLimitResponse } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  // Rate limit kontrolü
  const rateLimit = checkRateLimit(request, RATE_LIMITS.publicForm, 'leads')
  if (!rateLimit.success) {
    return rateLimitResponse(rateLimit.resetIn)
  }

  try {
    const body = await request.json()
    const validation = leadCreateSchema.safeParse(body)

    if (!validation.success) {
      console.error('Lead validation error:', validation.error.errors)
      return NextResponse.json({ 
        error: 'Geçersiz veri', 
        details: validation.error.errors 
      }, { status: 400 })
    }

    const data = sanitizeObject(validation.data)

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        district: data.district,
        service: data.service,
        message: data.message || null,
        source: 'teklif-al'
      }
    })

    // Email bildirimi gönder (hata olsa bile form kaydını bozma)
    notifyNewLead({
      name: lead.name,
      phone: lead.phone,
      district: lead.district,
      service: lead.service,
      message: lead.message,
    }).catch((err) => console.error('Email notification error:', err))

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Lead create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
