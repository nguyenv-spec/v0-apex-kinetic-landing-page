import { Card, CardContent } from '@/components/ui/card'
import { SectionReveal } from '@/components/section-reveal'
import { stats, testimonials } from '@/lib/site-data'
import { Quote } from 'lucide-react'

export function Proof() {
  return (
    <section id="results" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Proof of Performance
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Outcomes that get athletes back to what they love — backed by a
            track record.
          </p>
        </SectionReveal>

        {/* Metrics bar */}
        <SectionReveal className="mt-12">
          <div className="glass grid grid-cols-1 gap-6 rounded-2xl px-6 py-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-4xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Testimonials */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <SectionReveal as="article" key={t.name} delay={i * 100}>
              <Card className="glass h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <Quote className="size-7 text-primary" />
                  <p className="flex-1 leading-relaxed text-pretty text-foreground">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
