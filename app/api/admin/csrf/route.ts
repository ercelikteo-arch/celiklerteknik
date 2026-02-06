import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { generateCSRFToken } from '@/lib/csrf'

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = generateCSRFToken()
    
    return NextResponse.json({ csrfToken: token })
  } catch (error) {
    console.error('CSRF token error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
