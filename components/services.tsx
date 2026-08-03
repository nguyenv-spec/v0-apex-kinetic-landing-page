'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { SectionReveal } from '@/components/section-reveal'
import { BookServiceButton } from '@/components/book-service-button'
import { services } from '@/lib/site-data'
import { CreditCard } from 'lucide-react'

const bodyParts = ['All', 'Knee', 'Shoulder', 'Spine', 'Hip', 'Ankle'] as const

export function Services() {
  const [activeBodyPart, setActiveBodyPart] = useState<(typeof bodyParts)[number]>('All')

  const filteredServices =
    activeBodyPart === 'All'
      ? services
      : services.filter((service) => service.bodyPart === activeBodyPart)

  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-5xl">
            Services & Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Flat rate care with no surprise fees. Choose the treatment plan that
            matches your injury, your sport, and your recovery goals.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10 flex flex-wrap justify-center gap-2">
          {bodyParts.map((part) => (
            <button
              key={part}
              type="button"
              onClick={() => setActiveBodyPart(part)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeBodyPart === part
                  ? 'border-primary/30 bg-primary text-primary-foreground shadow-sm'
                  : 'border-border/70 bg-background/70 text-muted-foreground hover:border-primary/20 hover:text-foreground'
              }`}
            >
              {part}
            </button>
          ))}
        </SectionReveal>

        <div className="mt-8 space-y-4">
          {filteredServices.map((service, i) => (
            <SectionReveal as="article" key={service.id} delay={i * 70}>
              <div className="rounded-2xl border border-border/60 bg-secondary/10 p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">{service.duration}</Badge>
                      <span className="text-sm font-medium text-primary/80">
                        {service.provider}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <span className="font-mono text-2xl font-semibold text-primary">
                      {service.price}
                    </span>
                    <BookServiceButton serviceId={service.id} />
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10">
          <div className="glass mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center text-sm text-muted-foreground">
            <CreditCard className="size-4 shrink-0 text-primary" />
            <p className="text-pretty">
              We accept HSA/FSA cards. Detailed superbills are provided for out of network insurance reimbursement.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
