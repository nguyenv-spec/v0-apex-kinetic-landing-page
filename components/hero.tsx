import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'
import { KineticBackground } from '@/components/kinetic-background'
import { SectionReveal } from '@/components/section-reveal'
import { stats } from '@/lib/site-data'
import { Activity, BadgeCheck, ShieldCheck, Sparkles, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-athlete.png"
          alt="Athlete training in an advanced sports medicine recovery facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <KineticBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-44 lg:px-10">
        <div className="max-w-3xl">
          <SectionReveal delay={80}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              Sports Medicine & Recovery
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-6xl lg:text-7xl">
              Recover Stronger.{' '}
              <span className="text-primary">Return Faster.</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-muted-foreground">
              Advanced non surgical orthopedic care and high performance recovery
              for athletes and active adults. We build clinically grounded plans
              that get you moving confidently again.
            </p>
          </SectionReveal>

          <SectionReveal delay={240}>
            <div className="mt-8">
              <CtaButton size="lg" className="h-12 px-6 text-base" />
            </div>
          </SectionReveal>

          <SectionReveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-4 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
                <Star className="size-4 fill-primary text-primary" />
                4.9 rating across 300+ reviews
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="size-4 text-accent" />
                No referral needed for PT in Massachusetts
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <BadgeCheck className="size-4 text-accent" />
                Flexible insurance support
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={360}>
          <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-5 py-4">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </SectionReveal>
      </div>
    </section>
  )
}
