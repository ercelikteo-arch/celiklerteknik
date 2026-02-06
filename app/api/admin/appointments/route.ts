import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { appointmentFilterSchema, paginationSchema } from '@/lib/validation'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const filters = appointmentFilterSchema.safeParse({
      status: searchParams.get('status') || undefined,
      district: searchParams.get('district') || undefined,
      service: searchParams.get('service') || undefined,
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
    })
    const pagination = paginationSchema.safeParse({
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
    })

    const where: Record<string, unknown> = {}
    
    if (filters.success) {
      if (filters.data.status) where.status = filters.data.status
      if (filters.data.district) where.district = filters.data.district
      if (filters.data.service) where.service = filters.data.service
      if (filters.data.dateFrom || filters.data.dateTo) {
        where.preferredDate = {}
        if (filters.data.dateFrom) (where.preferredDate as Record<string, Date>).gte = new Date(filters.data.dateFrom)
        if (filters.data.dateTo) (where.preferredDate as Record<string, Date>).lte = new Date(filters.data.dateTo)
      }
    }

    const page = pagination.success ? pagination.data.page : 1
    const limit = pagination.success ? pagination.data.limit : 20

    const [appointments, total] = await Promise.all([
      prisma.appointment.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.appointment.count({ where }),
    ])

    return NextResponse.json({
      data: appointments,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Appointments fetch error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
