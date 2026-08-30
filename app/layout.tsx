import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Mono } from 'next/font/google'
import './globals.css'

const body = Archivo({ subsets: ['latin'], variable: '--font-body' })
const display = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Sun Cerrae Quinones | Project Coordinator Portfolio',
  description: 'Project Coordinator with 8 years of operations experience in cross-functional delivery, workflow improvement, healthcare revenue cycle, and digital production.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e6',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${body.variable} ${display.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
