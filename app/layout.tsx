import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://apexkinetic.example.com'),
  title: {
    default: 'Apex Kinetic | Elite Sports Medicine & Recovery in Boston',
    template: '%s | Apex Kinetic',
  },
  description:
    'Advanced non surgical orthopedic care and rapid performance recovery for athletes and active adults. Get back in the game faster with Apex Kinetic in Boston, MA.',
  keywords: [
    'sports medicine',
    'Boston sports medicine',
    'non surgical orthopedics',
    'physical therapy',
    'concussion management',
    'running gait analysis',
    'athletic recovery',
  ],
  authors: [{ name: 'Apex Kinetic' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apexkinetic.example.com',
    siteName: 'Apex Kinetic',
    title: 'Apex Kinetic | Elite Sports Medicine & Recovery',
    description:
      'Advanced non surgical orthopedic care and rapid performance recovery. Get back in the game faster.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Kinetic | Elite Sports Medicine & Recovery',
    description:
      'Advanced non surgical orthopedic care and rapid performance recovery. Get back in the game faster.',
  },
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
  themeColor: '#0F172A',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
