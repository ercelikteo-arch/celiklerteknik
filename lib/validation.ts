import { z } from 'zod'

// ==================== COMMON ====================

export const idSchema = z.string().cuid()

export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
})

// ==================== APPOINTMENTS ====================

export const appointmentStatusSchema = z.enum(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'])

export const appointmentFilterSchema = z.object({
  status: appointmentStatusSchema.optional(),
  district: z.string().optional(),
  service: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
})

export const appointmentUpdateSchema = z.object({
  status: appointmentStatusSchema.optional(),
  adminNotes: z.string().max(1000).optional(),
})

// ==================== FAULT REPORTS ====================

export const faultStatusSchema = z.enum(['PENDING', 'INVESTIGATING', 'COMPLETED'])

export const faultFilterSchema = z.object({
  status: faultStatusSchema.optional(),
  service: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
})

export const faultUpdateSchema = z.object({
  status: faultStatusSchema.optional(),
  adminNotes: z.string().max(1000).optional(),
})

// ==================== PRODUCTS ====================

export const productSchema = z.object({
  name: z.string().min(2).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  shortDescription: z.string().min(10).max(500),
  description: z.string().min(20),
  price: z.number().positive().optional().nullable(),
  images: z.array(z.string().url()).default([]),
  category: z.string().min(2).max(100),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
  metaTitle: z.string().max(70).optional().nullable(),
  metaDescription: z.string().max(160).optional().nullable(),
})

export const productUpdateSchema = productSchema.partial()

// ==================== REFERENCES ====================

export const referenceSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  location: z.string().min(2).max(100),
  projectType: z.string().min(2).max(100),
  serviceType: z.string().min(2).max(100),
  duration: z.string().max(50).optional().nullable(),
  summary: z.string().min(20).max(1000),
  benefits: z.array(z.string()).default([]),
  beforeImages: z.array(z.string().url()).default([]),
  afterImages: z.array(z.string().url()).default([]),
  published: z.boolean().default(false),
})

export const referenceUpdateSchema = referenceSchema.partial()

// ==================== DISTRICTS ====================

export const districtSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  population: z.string().max(50).optional().nullable(),
  uniqueContent: z.string().optional().nullable(),
  serviceNote: z.string().max(500).optional().nullable(),
  active: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
})

export const districtUpdateSchema = districtSchema.partial()

// ==================== SERVICES ====================

export const serviceSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  shortName: z.string().min(2).max(50),
  description: z.string().min(20),
  keywords: z.array(z.string()).default([]),
  active: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
})

export const serviceUpdateSchema = serviceSchema.partial()

// ==================== BLOG ====================

export const blogSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  excerpt: z.string().min(20).max(500),
  content: z.string().min(100),
  coverImage: z.string().url().optional().nullable(),
  tags: z.array(z.string()).default([]),
  category: z.string().min(2).max(100),
  published: z.boolean().default(false),
  readingTime: z.number().int().min(1).default(5),
  metaTitle: z.string().max(70).optional().nullable(),
  metaDescription: z.string().max(160).optional().nullable(),
  ogImage: z.string().url().optional().nullable(),
  authorId: z.string().cuid(),
})

// ==================== REVIEWS ====================

export const reviewSchema = z.object({
  name: z.string().min(2).max(100),
  district: z.string().min(2).max(100),
  rating: z.number().int().min(1).max(5).default(5),
  comment: z.string().min(10).max(1000),
  published: z.boolean().default(false),
})

// ==================== LEADS ====================

export const leadCreateSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  email: z.string().email().optional().nullable(),
  district: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional().nullable(),
})

// ==================== APPOINTMENTS (PUBLIC) ====================

export const appointmentCreateSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  address: z.string().min(5).max(500),
  district: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  preferredDate: z.string().datetime().or(z.string()),
  preferredTime: z.string().max(50).optional().nullable(),
  notes: z.string().max(1000).optional().nullable(),
})

// ==================== FAULTS (PUBLIC) ====================

export const faultCreateSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  service: z.string().min(2).max(100),
  description: z.string().min(10).max(2000),
  images: z.array(z.string().url()).default([]),
})

// ==================== SANITIZATION ====================

export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const sanitized = { ...obj }
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      (sanitized as Record<string, unknown>)[key] = sanitizeHtml(sanitized[key] as string)
    }
  }
  return sanitized
}
