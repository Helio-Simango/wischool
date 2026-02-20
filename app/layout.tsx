import type { Metadata, Viewport } from 'next'
import { Open_Sans, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'WiSchool - Quality Education By Any Means Necessary',
  description:
    'WiSchool is a technology education institution offering quality courses in programming, design, data science, and more. Learn from the best instructors around the globe.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#09B451',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
