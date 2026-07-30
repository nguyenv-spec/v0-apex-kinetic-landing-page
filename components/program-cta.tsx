'use client'

import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'
import { SectionReveal } from '@/components/section-reveal'
import { program } from '@/lib/site-data'
import { ArrowRight } from 'lucide-react'

export function ProgramCta() {
  const { openJoin, openLearnMore } = useBooking()

  return (
    <SectionReveal className="mt-16">
      <div className="glass-strong flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
          {program.name}
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          {program.tagline} Ongoing assessments, recovery sessions, and direct
          provider access, built to keep you performing all season long.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-6 text-base"
            onClick={openJoin}
          >
            Join Program
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-base"
            onClick={openLearnMore}
          >
            Learn More
          </Button>
        </div>
      </div>
    </SectionReveal>
  )
}
