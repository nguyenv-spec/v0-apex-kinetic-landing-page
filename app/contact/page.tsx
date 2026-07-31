import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BookingProvider } from '@/components/booking-context'
import { BookingModal } from '@/components/booking-modal'
import { JoinProgramModal } from '@/components/join-program-modal'
import { LearnMoreModal } from '@/components/learn-more-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { ProgramCta } from '@/components/program-cta'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'
import { clinic, providers } from '@/lib/site-data'
import { ArrowLeft, Mail, MapPin, Phone, BadgeCheck, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Dr. Marcus Vance',
  description:
    'Get in touch with Dr. Marcus Vance for non surgical orthopedic care and concussion management at Apex Kinetic in Boston, MA.',
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
          <SectionReveal className="flex flex-col gap-8">
            <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm">
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
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
                      {marcus.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
                      <BadgeCheck className="size-3.5 text-primary" />
                      {marcus.credentials}
                    </span>
                  </div>
                  <p className="mt-1 text-pretty text-primary/80">{marcus.role}</p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                {marcus.bio} Reach out directly with questions about your injury,
                recovery options, or to discuss whether non surgical care is right
                for you.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4 text-primary" />
                  Same week appointments available
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-primary" />
                  No referral required for PT visits
                </div>
              </div>
            </div>

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

        <ProgramCta />
      </main>
      <Footer />
      <BookingModal />
      <JoinProgramModal />
      <LearnMoreModal />
    </BookingProvider>
  )
}
