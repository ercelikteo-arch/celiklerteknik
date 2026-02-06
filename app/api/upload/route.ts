import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 })
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Sadece JPEG, PNG ve WebP dosyaları kabul edilir' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'Dosya boyutu 5MB\'dan küçük olmalıdır' },
        { status: 400 }
      )
    }

    // Check if we should use Cloudinary (production)
    if (process.env.CLOUDINARY_URL) {
      // Cloudinary upload
      const cloudinaryUrl = await uploadToCloudinary(file)
      return NextResponse.json({ url: cloudinaryUrl })
    }

    // Local upload (development)
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    
    // Create uploads directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`
    const filepath = path.join(uploadDir, filename)

    // Write file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)

    const url = `/uploads/${filename}`
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Yükleme hatası' }, { status: 500 })
  }
}

async function uploadToCloudinary(file: File): Promise<string> {
  const cloudinaryUrl = process.env.CLOUDINARY_URL
  if (!cloudinaryUrl) {
    throw new Error('Cloudinary not configured')
  }

  // Parse Cloudinary URL: cloudinary://api_key:api_secret@cloud_name
  const match = cloudinaryUrl.match(/cloudinary:\/\/(\d+):([^@]+)@(.+)/)
  if (!match) {
    throw new Error('Invalid Cloudinary URL format')
  }

  const [, apiKey, apiSecret, cloudName] = match

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'ml_default') // You may need to create this preset
  formData.append('api_key', apiKey)

  // For signed uploads, you'd need to generate a signature
  // This is a simplified unsigned upload example
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error('Cloudinary upload failed')
  }

  const data = await response.json()
  return data.secure_url
}
