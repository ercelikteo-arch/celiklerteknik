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

    // Check slug uniqueness
    const existing = await prisma.blogPost.findUnique({
      where: { slug: data.slug }
    })

    if (existing) {
      return NextResponse.json({ error: 'Bu slug zaten kullanılıyor' }, { status: 400 })
    }

    const blog = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage || null,
        category: data.category,
        tags: data.tags,
        published: data.published,
        publishDate: data.published ? new Date() : null,
        readingTime: data.readingTime,
        metaTitle: data.metaTitle || null,
        metaDescription: data.metaDescription || null,
        authorId: data.authorId
      }
    })

    return NextResponse.json(blog)
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
