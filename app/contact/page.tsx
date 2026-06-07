import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BookingProvider } from '@/components/booking-context'
import { BookingModal } from '@/components/booking-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'
import { clinic, providers } from '@/lib/site-data'
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Dr. Marcus Vance',
  description:
    'Get in touch with Dr. Marcus Vance for non-surgical orthopedic care and concussion management at Apex Kinetic in Boston, MA.',
}

const marcus = providers.find((p) => p.id === 'marcus-vance')!

export default function ContactPage() {
  return (
    <BookingProvider>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 lg:px-10">
        <SectionReveal>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            className="mb-8 px-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
            render={<Link href="/" />}
          >
            <ArrowLeft data-icon="inline-start" />
            Back to home
          </Button>
        </SectionReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Provider intro + details */}
          <SectionReveal className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-border/60">
                <Image
                  src={marcus.image}
                  alt={`Portrait of ${marcus.name}, ${marcus.credentials}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                  {marcus.name}
                  <span className="ml-2 text-base font-normal text-primary">
                    {marcus.credentials}
                  </span>
                </h1>
                <p className="mt-1 text-pretty text-primary/80">
                  {marcus.role}
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {marcus.bio} Reach out directly with questions about your injury,
              recovery options, or to discuss whether non-surgical care is right
              for you.
            </p>

            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.city}, {clinic.address.state}{' '}
                  {clinic.address.zip}
                </span>
              </li>
              <li>
                <a
                  href={clinic.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="size-5 shrink-0 text-primary" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="size-5 shrink-0 text-primary" />
                  {clinic.email}
                </a>
              </li>
            </ul>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal delay={120}>
            <ContactForm />
          </SectionReveal>
        </div>
      </main>
      <Footer />
      <BookingModal />
    </BookingProvider>
  )
}
