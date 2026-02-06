import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { districtSchema } from '@/lib/validation'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const active = searchParams.get('active')

    const where: Record<string, unknown> = {}
    if (active === 'true') where.active = true
    if (active === 'false') where.active = false

    const districts = await prisma.district.findMany({
      where,
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ data: districts })
  } catch (error) {
    console.error('Districts fetch error:', error)
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
    const validation = districtSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }

    const district = await prisma.district.create({
      data: validation.data,
    })

    revalidatePath('/ilceler')
    return NextResponse.json(district, { status: 201 })
  } catch (error) {
    console.error('District create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
