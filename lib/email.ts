import nodemailer from 'nodemailer'
import { prisma } from './prisma'

interface EmailOptions {
  to: string
  subject: string
  html: string
}

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    console.warn('SMTP not configured, emails will be logged only')
    return null
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  return transporter
}

async function getAdminEmail(): Promise<string> {
  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: 'main' },
      select: { adminEmail: true },
    })
    return settings?.adminEmail || process.env.ADMIN_EMAIL || 'admin@celiklerteknik.com'
  } catch {
    return process.env.ADMIN_EMAIL || 'admin@celiklerteknik.com'
  }
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const transport = getTransporter()

  if (!transport) {
    console.log('📧 Email (not sent - SMTP not configured):')
    console.log(`   To: ${options.to}`)
    console.log(`   Subject: ${options.subject}`)
    return false
  }

  try {
    await transport.sendMail({
      from: process.env.SMTP_USER,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    console.log(`📧 Email sent to ${options.to}: ${options.subject}`)
    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

// ==================== NOTIFICATION TEMPLATES ====================

export async function notifyNewLead(lead: {
  name: string
  phone: string
  district: string
  service: string
  message?: string | null
}) {
  const adminEmail = await getAdminEmail()
  
  await sendEmail({
    to: adminEmail,
    subject: `🔔 Yeni Teklif Talebi: ${lead.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Yeni Teklif Talebi</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>İlçe:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.district}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Hizmet:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.service}</td></tr>
          ${lead.message ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Mesaj:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${lead.message}</td></tr>` : ''}
        </table>
        <p style="margin-top: 20px;"><a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/leads" style="background: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Admin Panelde Görüntüle</a></p>
      </div>
    `,
  })
}

export async function notifyNewAppointment(appointment: {
  name: string
  phone: string
  address: string
  district: string
  service: string
  preferredDate: Date
  preferredTime?: string | null
}) {
  const adminEmail = await getAdminEmail()
  const dateStr = new Date(appointment.preferredDate).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  await sendEmail({
    to: adminEmail,
    subject: `📅 Yeni Keşif Randevusu: ${appointment.name} - ${dateStr}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Yeni Keşif Randevusu</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${appointment.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${appointment.phone}">${appointment.phone}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Adres:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${appointment.address}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>İlçe:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${appointment.district}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Hizmet:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${appointment.service}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Tarih:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${dateStr}</td></tr>
          ${appointment.preferredTime ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Saat:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${appointment.preferredTime}</td></tr>` : ''}
        </table>
        <p style="margin-top: 20px;"><a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/appointments" style="background: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Admin Panelde Görüntüle</a></p>
      </div>
    `,
  })
}

export async function notifyNewFault(fault: {
  name: string
  phone: string
  service: string
  description: string
}) {
  const adminEmail = await getAdminEmail()

  await sendEmail({
    to: adminEmail,
    subject: `⚠️ Yeni Arıza Kaydı: ${fault.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">Yeni Arıza Kaydı</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fault.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${fault.phone}">${fault.phone}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Hizmet:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fault.service}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Açıklama:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fault.description}</td></tr>
        </table>
        <p style="margin-top: 20px;"><a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/faults" style="background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Admin Panelde Görüntüle</a></p>
      </div>
    `,
  })
}
