import { SectionReveal } from '@/components/section-reveal'
import { stats, testimonials } from '@/lib/site-data'
import { HeartPulse, Star } from 'lucide-react'

export function Proof() {
  return (
    <section id="results" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 px-3 py-1 text-sm font-medium text-primary">
            <HeartPulse className="size-4" />
            Trusted by active adults and athletes
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-5xl">
            Measurable progress, not vague promises
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We focus on outcomes that matter: returning you to the movement,
            strength, and confidence you rely on every day.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <div className="glass grid grid-cols-1 gap-6 rounded-2xl bg-secondary/10 px-6 py-8 sm:grid-cols-3">
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
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-secondary/10 p-6">
                <div className="flex items-start gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <img
                      src={t.image}
                      alt={`${t.name} profile photo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, starIndex) => {
                    const filled = starIndex < t.rating
                    return (
                      <Star
                        key={starIndex}
                        className={filled ? 'size-5 text-primary' : 'size-5 text-muted-foreground'}
                        fill={filled ? 'currentColor' : 'none'}
                      />
                    )
                  })}
                </div>
                <p className="flex-1 leading-relaxed text-pretty text-foreground">
                  {t.quote}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
