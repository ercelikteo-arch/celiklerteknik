import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const review = await prisma.review.create({
      data: {
        name: data.name,
        district: data.district,
        rating: data.rating,
        comment: data.comment,
        published: data.published
      }
    })

    return NextResponse.json(review)
  } catch (error) {
    console.error('Review create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
