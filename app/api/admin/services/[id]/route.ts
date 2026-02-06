import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { serviceUpdateSchema } from '@/lib/validation'
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

    const service = await prisma.service.findUnique({
      where: { id: params.id },
    })

    if (!service) {
      return NextResponse.json({ error: 'Hizmet bulunamadı' }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error('Service fetch error:', error)
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
    const validation = serviceUpdateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }

    const service = await prisma.service.update({
      where: { id: params.id },
      data: validation.data,
    })

    revalidatePath('/hizmetler')
    revalidatePath(`/hizmetler/${service.slug}`)
    return NextResponse.json(service)
  } catch (error) {
    console.error('Service update error:', error)
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

    await prisma.service.delete({
      where: { id: params.id },
    })

    revalidatePath('/hizmetler')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Service delete error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
