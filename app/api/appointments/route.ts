import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { appointmentCreateSchema, sanitizeObject } from '@/lib/validation'
import { notifyNewAppointment } from '@/lib/email'
import { checkRateLimit, RATE_LIMITS, rateLimitResponse } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  // Rate limit kontrolü
  const rateLimit = checkRateLimit(request, RATE_LIMITS.publicForm, 'appointments')
  if (!rateLimit.success) {
    return rateLimitResponse(rateLimit.resetIn)
  }

  try {
    const body = await request.json()
    const validation = appointmentCreateSchema.safeParse(body)

    if (!validation.success) {
      console.error('Appointment validation error:', validation.error.errors)
      return NextResponse.json({ 
        error: 'Geçersiz veri', 
        details: validation.error.errors 
      }, { status: 400 })
    }

    const data = sanitizeObject(validation.data)

    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        district: data.district,
        service: data.service,
        preferredDate: new Date(data.preferredDate),
        preferredTime: data.preferredTime || null,
        notes: data.notes || null,
      }
    })

    // Email bildirimi gönder (hata olsa bile form kaydını bozma)
    notifyNewAppointment({
      name: appointment.name,
      phone: appointment.phone,
      address: appointment.address,
      district: appointment.district,
      service: appointment.service,
      preferredDate: appointment.preferredDate,
      preferredTime: appointment.preferredTime,
    }).catch((err) => console.error('Email notification error:', err))

    return NextResponse.json({ success: true, id: appointment.id })
  } catch (error) {
    console.error('Appointment create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
