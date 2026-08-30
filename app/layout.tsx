import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Sun Cerrae Quinones | Project Coordinator',
  description: 'Project Coordinator based in Charlotte, NC, with experience supporting healthcare operations, revenue cycle, and digital production teams.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f2e8',
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
