import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import { inter } from './styles/fonts'

export const metadata: Metadata = {
  title: 'Chasing the sun',
  description: 'Blog about one year around the world trip',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
