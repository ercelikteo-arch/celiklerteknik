import { Toaster } from 'react-hot-toast'
import '../globals.css'

export const metadata = {
  title: 'Admin Panel | Çelikler Teknik',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  )
}
