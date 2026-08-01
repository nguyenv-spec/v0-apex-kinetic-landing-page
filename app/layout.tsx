import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
})

const siteUrl = 'https://v0-apex-kinetic-landing-page.vercel.app'
const defaultTitle = 'Apex Kinetic | Elite Sports Medicine & Recovery in Boston'
const defaultDescription =
  'Advanced non-surgical orthopedic care and rapid recovery for athletes and active adults in Boston. Sports medicine, concussion care, and performance therapy with Apex Kinetic.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: defaultTitle,
    template: '%s | Apex Kinetic',
  },
  description: defaultDescription,
  keywords: [
    'sports medicine',
    'Boston sports medicine',
    'non surgical orthopedics',
    'physical therapy',
    'concussion management',
    'running gait analysis',
    'athletic recovery',
    'Boston orthopedic care',
  ],
  authors: [{ name: 'Apex Kinetic' }],
  applicationName: 'Apex Kinetic',
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Apex Kinetic',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apex Kinetic preview image for sports medicine and recovery care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/images/apex-kinetic-logo.png',
    shortcut: '/images/apex-kinetic-logo.png',
    apple: '/images/apex-kinetic-logo.png',
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-background font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
