'use client'

import { ArrowRight } from 'lucide-react'
import { SectionReveal } from '@/components/section-reveal'

const steps = [
  {
    title: 'Book online in 60 seconds',
    description: 'Pick a visit type, share your concern, and choose the next available slot.',
  },
  {
    title: 'Same week assessment',
    description: 'Meet with an orthopedic specialist or PT for a focused exam and clear next steps.',
  },
  {
    title: 'Custom recovery plan',
    description: 'Receive treatment, exercise programming, and guidance tailored to your sport and timeline.',
  },
  {
    title: 'Back to full activity',
    description: 'Return with more confidence, less pain, and a plan that keeps you performing well.',
  },
] as const

export function WhatHappensNext() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-5xl">
            What happens next
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A simple, low friction path from first booking to full return to sport.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <SectionReveal as="article" key={step.title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Step {index + 1}
                  </span>
                  {index < steps.length - 1 ? (
                    <ArrowRight className="size-4 text-muted-foreground" />
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
