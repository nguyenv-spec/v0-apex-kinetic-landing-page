import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'
import { KineticBackground } from '@/components/kinetic-background'
import { SectionReveal } from '@/components/section-reveal'
import { stats } from '@/lib/site-data'
import { Activity, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
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

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-10">
        <div className="max-w-2xl">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" />
              Non-surgical orthopedic care, Boston
            </span>
          </SectionReveal>

          <SectionReveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
              Get Back in the Game.{' '}
              <span className="text-primary">Faster.</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
              Advanced non-surgical orthopedic care and rapid performance
              recovery for athletes and active adults. Personalized recovery
              plans built to return you to peak performance.
            </p>
          </SectionReveal>

          <SectionReveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton size="lg" className="h-12 px-6 text-base" />
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="size-4 text-primary" />
                No referral needed in Massachusetts
              </span>
            </div>
          </SectionReveal>
        </div>

        {/* Stats strip */}
        <SectionReveal delay={320}>
          <dl className="mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-5 py-4"
              >
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
