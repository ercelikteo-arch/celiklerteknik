import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { referenceSchema, paginationSchema } from '@/lib/validation'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const pagination = paginationSchema.safeParse({
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
    })
    const published = searchParams.get('published')

    const where: Record<string, unknown> = {}
    if (published === 'true') where.published = true
    if (published === 'false') where.published = false

    const page = pagination.success ? pagination.data.page : 1
    const limit = pagination.success ? pagination.data.limit : 20

    const [references, total] = await Promise.all([
      prisma.reference.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.reference.count({ where }),
    ])

    return NextResponse.json({
      data: references,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error('References fetch error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validation = referenceSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }

    const reference = await prisma.reference.create({
      data: validation.data,
    })

    revalidatePath('/referanslar')
    return NextResponse.json(reference, { status: 201 })
  } catch (error) {
    console.error('Reference create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
