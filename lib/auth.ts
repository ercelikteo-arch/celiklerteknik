import { cookies } from 'next/headers'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'

export interface JWTPayload {
  userId: string
  email: string
  role: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch {
    return null
  }
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  
  if (!token) return null
  
  const payload = verifyToken(token)
  if (!payload) return null
  
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, name: true, role: true }
  })
  
  return user
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if (session.role !== 'ADMIN') {
    throw new Error('Admin access required')
  }
  return session
}

// Rate limiting store (in-memory, use Redis in production)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

export function checkRateLimit(ip: string): boolean {
  const limit = parseInt(process.env.LOGIN_RATE_LIMIT || '5')
  const window = parseInt(process.env.LOGIN_RATE_WINDOW || '900000') // 15 minutes
  
  const now = Date.now()
  const attempts = loginAttempts.get(ip)
  
  if (!attempts) {
    loginAttempts.set(ip, { count: 1, lastAttempt: now })
    return true
  }
  
  if (now - attempts.lastAttempt > window) {
    loginAttempts.set(ip, { count: 1, lastAttempt: now })
    return true
  }
  
  if (attempts.count >= limit) {
    return false
  }
  
  attempts.count++
  attempts.lastAttempt = now
  return true
}

export function resetRateLimit(ip: string): void {
  loginAttempts.delete(ip)
}
