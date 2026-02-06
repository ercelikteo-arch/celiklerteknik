import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { districtUpdateSchema } from '@/lib/validation'
import { revalidatePath } from 'next/cache'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const district = await prisma.district.findUnique({
      where: { id: params.id },
    })

    if (!district) {
      return NextResponse.json({ error: 'İlçe bulunamadı' }, { status: 404 })
    }

    return NextResponse.json(district)
  } catch (error) {
    console.error('District fetch error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validation = districtUpdateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }

    const district = await prisma.district.update({
      where: { id: params.id },
      data: validation.data,
    })

    revalidatePath('/ilceler')
    revalidatePath(`/ilceler/${district.slug}`)
    return NextResponse.json(district)
  } catch (error) {
    console.error('District update error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.district.delete({
      where: { id: params.id },
    })

    revalidatePath('/ilceler')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('District delete error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
