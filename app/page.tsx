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

export default function Page() {
  return (
    <BookingProvider>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Providers />
        <Services />
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
