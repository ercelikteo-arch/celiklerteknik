import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const settings = await prisma.siteSettings.update({
      where: { id: 'main' },
      data: {
        companyName: data.companyName,
        phone: data.phone,
        phoneSecondary: data.phoneSecondary || null,
        whatsapp: data.whatsapp,
        email: data.email,
        workingHours: data.workingHours,
        workingHoursSunday: data.workingHoursSunday,
        addressGelibolu: data.addressGelibolu || null,
        addressLapseki: data.addressLapseki || null,
        mapLinkGelibolu: data.mapLinkGelibolu || null,
        mapLinkLapseki: data.mapLinkLapseki || null,
        facebook: data.facebook || null,
        instagram: data.instagram || null,
        twitter: data.twitter || null,
        linkedin: data.linkedin || null,
        siteTitleTemplate: data.siteTitleTemplate,
        defaultMetaDescription: data.defaultMetaDescription || null,
        defaultOGImage: data.defaultOGImage || null,
      }
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Settings update error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
