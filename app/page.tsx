import type { Metadata } from 'next'
import { BookingProvider } from '@/components/booking-context'
import { BookingModal } from '@/components/booking-modal'
import { JoinProgramModal } from '@/components/join-program-modal'
import { LearnMoreModal } from '@/components/learn-more-modal'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Providers } from '@/components/providers'
import { Services } from '@/components/services'
import { Proof } from '@/components/proof'
import { Faqs } from '@/components/faqs'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { WhatHappensNext } from '@/components/what-happens-next'

export const metadata: Metadata = {
  title: 'Boston Sports Medicine & Recovery',
  description:
    'Apex Kinetic offers non-surgical orthopedic care, sports physical therapy, concussion support, and performance recovery in Boston.',
  alternates: {
    canonical: 'https://www.apexkinetic.com/',
  },
  openGraph: {
    title: 'Apex Kinetic | Boston Sports Medicine & Recovery',
    description:
      'Apex Kinetic offers non-surgical orthopedic care, sports physical therapy, concussion support, and performance recovery in Boston.',
    url: 'https://www.apexkinetic.com/',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Apex Kinetic | Boston Sports Medicine & Recovery',
    description:
      'Apex Kinetic offers non-surgical orthopedic care, sports physical therapy, concussion support, and performance recovery in Boston.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return (
    <BookingProvider>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Providers />
        <Services />
        <WhatHappensNext />
        <Proof />
        <Faqs />
      </main>
      <Footer />
      <BookingModal />
      <JoinProgramModal />
      <LearnMoreModal />
    </BookingProvider>
  )
}
