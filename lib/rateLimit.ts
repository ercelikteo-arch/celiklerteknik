import { NextRequest } from 'next/server'

interface RateLimitConfig {
  interval: number // ms
  maxRequests: number
}

interface RateLimitEntry {
  count: number
  resetTime: number
}

// In-memory store (production'da Redis kullanılmalı)
const rateLimitStore = new Map<string, RateLimitEntry>()

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Her dakika temizle

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  return '127.0.0.1'
}

export function checkRateLimit(
  request: NextRequest,
  config: RateLimitConfig,
  prefix: string = 'default'
): { success: boolean; remaining: number; resetIn: number } {
  const ip = getClientIP(request)
  const key = `${prefix}:${ip}`
  const now = Date.now()

  const entry = rateLimitStore.get(key)

  if (!entry || entry.resetTime < now) {
    // Yeni entry oluştur
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.interval,
    })
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetIn: config.interval,
    }
  }

  if (entry.count >= config.maxRequests) {
    // Limit aşıldı
    return {
      success: false,
      remaining: 0,
      resetIn: entry.resetTime - now,
    }
  }

  // İstek sayısını artır
  entry.count++
  rateLimitStore.set(key, entry)

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetIn: entry.resetTime - now,
  }
}

// Preset configurations
export const RATE_LIMITS = {
  // Public form endpoints: 10 istek / 10 dakika
  publicForm: {
    interval: 10 * 60 * 1000, // 10 dakika
    maxRequests: 10,
  },
  // Admin API: 100 istek / dakika
  adminApi: {
    interval: 60 * 1000, // 1 dakika
    maxRequests: 100,
  },
  // Login: 5 deneme / 15 dakika
  login: {
    interval: 15 * 60 * 1000, // 15 dakika
    maxRequests: 5,
  },
}

export function rateLimitResponse(resetIn: number) {
  return new Response(
    JSON.stringify({
      error: 'Çok fazla istek gönderdiniz. Lütfen biraz bekleyin.',
      retryAfter: Math.ceil(resetIn / 1000),
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': Math.ceil(resetIn / 1000).toString(),
      },
    }
  )
}
