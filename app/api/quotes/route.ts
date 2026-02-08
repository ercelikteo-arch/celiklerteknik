import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { sanitizeObject } from '@/lib/validation'
import { checkRateLimit, RATE_LIMITS, rateLimitResponse } from '@/lib/rateLimit'

const quoteCreateSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  email: z.string().email().optional().nullable(),
  district: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional().nullable(),
})

export async function POST(request: NextRequest) {
  // Rate limit kontrolü
  const rateLimit = checkRateLimit(request, RATE_LIMITS.publicForm, 'quotes')
  if (!rateLimit.success) {
    return rateLimitResponse(rateLimit.resetIn)
  }

  try {
    const body = await request.json()
    console.log('Quote API received:', JSON.stringify(body))
    
    const validation = quoteCreateSchema.safeParse(body)

    if (!validation.success) {
      console.error('Quote validation error:', JSON.stringify(validation.error.errors))
      return NextResponse.json({ 
        error: 'Geçersiz veri', 
        details: validation.error.errors 
      }, { status: 400 })
    }

    const data = sanitizeObject(validation.data)

    const quote = await prisma.quote.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        district: data.district,
        service: data.service,
        message: data.message || null,
      }
    })

    console.log('Quote created successfully:', quote.id)

    return NextResponse.json({ success: true, id: quote.id })
  } catch (error) {
    console.error('Quote create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
