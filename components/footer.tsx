'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { CtaButton } from '@/components/cta-button'
import { useBooking } from '@/components/booking-context'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { clinic } from '@/lib/site-data'
import { ArrowUp, MapPin, Phone, Clock } from 'lucide-react'

export function Footer() {
  const { openLearnMore } = useBooking()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/60">
      {/* Micro-CTA band */}
      <div className="glass-strong">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 py-12 text-center sm:px-6 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-3xl">
            Ready to recover? Book your visit today.
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            Personalized, non surgical care that gets you back to peak performance faster.
          </p>
          <CtaButton size="lg" className="h-12 px-6 text-base" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + address */}
          <div className="flex flex-col gap-4">
            <Logo />
            <address className="flex flex-col gap-2 text-sm not-italic text-muted-foreground">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.city}, {clinic.address.state}{' '}
                  {clinic.address.zip}
                </span>
              </span>
              <a
                href={clinic.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {clinic.phone}
              </a>
            </address>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Clock className="size-4 text-primary" />
              Hours
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-foreground/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Clinic</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Medical Disclaimer: Content is for informational purposes only and
              is not a substitute for professional medical advice. If this is a
              medical emergency, please dial 911.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button variant="ghost" size="sm" onClick={openLearnMore}>
              Learn More
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp data-icon="inline-start" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
