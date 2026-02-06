import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const CSRF_COOKIE_NAME = 'csrf_token'
const CSRF_HEADER_NAME = 'x-csrf-token'
const CSRF_TOKEN_LENGTH = 32

// Crypto-safe random token generator
function generateToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  const randomValues = new Uint8Array(CSRF_TOKEN_LENGTH)
  crypto.getRandomValues(randomValues)
  for (let i = 0; i < CSRF_TOKEN_LENGTH; i++) {
    token += chars[randomValues[i] % chars.length]
  }
  return token
}

// CSRF token oluştur ve cookie'ye yaz
export function generateCSRFToken(): string {
  const token = generateToken()
  
  cookies().set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/admin',
    maxAge: 60 * 60 * 24, // 24 saat
  })
  
  return token
}

// CSRF token'ı cookie'den oku
export function getCSRFTokenFromCookie(): string | null {
  return cookies().get(CSRF_COOKIE_NAME)?.value || null
}

// Request'ten CSRF token'ı al (header veya body)
export function getCSRFTokenFromRequest(request: NextRequest): string | null {
  // Önce header'dan kontrol et
  const headerToken = request.headers.get(CSRF_HEADER_NAME)
  if (headerToken) return headerToken
  
  return null
}

// CSRF doğrulama
export function validateCSRF(request: NextRequest): boolean {
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value
  const headerToken = request.headers.get(CSRF_HEADER_NAME)
  
  if (!cookieToken || !headerToken) {
    return false
  }
  
  // Timing-safe comparison
  if (cookieToken.length !== headerToken.length) {
    return false
  }
  
  let result = 0
  for (let i = 0; i < cookieToken.length; i++) {
    result |= cookieToken.charCodeAt(i) ^ headerToken.charCodeAt(i)
  }
  
  return result === 0
}

// CSRF hata response'u
export function csrfErrorResponse() {
  return NextResponse.json(
    { error: 'Geçersiz CSRF token. Sayfayı yenileyip tekrar deneyin.' },
    { status: 403 }
  )
}

// Middleware helper: CSRF kontrolü gerektiren methodlar
export function requiresCSRF(method: string): boolean {
  return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
}
