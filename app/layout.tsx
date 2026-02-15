import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Gianluca Kirilmaz | Growth Hacker & Digital Marketing Specialist',
  description:
    'Ottimizzo funnel, riduco il CAC e aumento il Conversion Rate. Growth Hacking, Paid Ads, SEO, CRO e Marketing Automation per far crescere il tuo business.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
