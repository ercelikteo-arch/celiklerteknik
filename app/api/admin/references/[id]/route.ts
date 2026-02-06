import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { referenceUpdateSchema } from '@/lib/validation'
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

    const reference = await prisma.reference.findUnique({
      where: { id: params.id },
    })

    if (!reference) {
      return NextResponse.json({ error: 'Referans bulunamadı' }, { status: 404 })
    }

    return NextResponse.json(reference)
  } catch (error) {
    console.error('Reference fetch error:', error)
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
    const validation = referenceUpdateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }

    const reference = await prisma.reference.update({
      where: { id: params.id },
      data: validation.data,
    })

    revalidatePath('/referanslar')
    return NextResponse.json(reference)
  } catch (error) {
    console.error('Reference update error:', error)
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

    await prisma.reference.delete({
      where: { id: params.id },
    })

    revalidatePath('/referanslar')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reference delete error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
