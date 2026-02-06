'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, FaFileAlt, FaCalendarAlt, FaExclamationTriangle,
  FaBlog, FaBox, FaImages, FaStar, FaCog, FaMapMarkerAlt,
  FaTools, FaSignOutAlt, FaBars, FaTimes
} from 'react-icons/fa'
import { useState } from 'react'

const menuItems = [
  { href: '/admin', icon: FaHome, label: 'Dashboard' },
  { href: '/admin/leads', icon: FaFileAlt, label: 'Teklif Talepleri' },
  { href: '/admin/appointments', icon: FaCalendarAlt, label: 'Keşif Randevuları' },
  { href: '/admin/faults', icon: FaExclamationTriangle, label: 'Arıza Kayıtları' },
  { href: '/admin/blog', icon: FaBlog, label: 'Blog Yönetimi' },
  { href: '/admin/products', icon: FaBox, label: 'Ürünler' },
  { href: '/admin/references', icon: FaImages, label: 'Referanslar' },
  { href: '/admin/reviews', icon: FaStar, label: 'Yorumlar' },
  { href: '/admin/districts', icon: FaMapMarkerAlt, label: 'İlçeler' },
  { href: '/admin/services', icon: FaTools, label: 'Hizmetler' },
  { href: '/admin/settings', icon: FaCog, label: 'Ayarlar' },
]

interface SidebarProps {
  user: { name: string; role: string }
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-lg"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-primary text-white
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold">Çelikler Teknik</h1>
          <p className="text-sm text-blue-200">Admin Panel</p>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-white/10">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-blue-200">{user.role === 'ADMIN' ? 'Yönetici' : 'Editör'}</p>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href))
            
            // Hide settings for editors
            if (item.href === '/admin/settings' && user.role !== 'ADMIN') {
              return null
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-white/20 text-white' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'}
                `}
              >
                <item.icon className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-blue-100 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
          >
            <FaSignOutAlt />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </aside>
    </>
  )
}
