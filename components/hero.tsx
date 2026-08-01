import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'
import { KineticBackground } from '@/components/kinetic-background'
import { SectionReveal } from '@/components/section-reveal'
import { stats } from '@/lib/site-data'
import { Activity, BadgeCheck, ShieldCheck, Sparkles, Star, Users } from 'lucide-react'

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

        </div>

        <SectionReveal delay={360}>
          <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-px rounded-3xl bg-slate-200/40 shadow-sm sm:grid-cols-3 overflow-hidden">
            {stats.map((stat) => {
              const icons = {
                ShieldCheck,
                Star,
                Users,
              } as const
              const Icon = icons[stat.icon]

              return (
                <div key={stat.label} className="bg-white/95 px-5 py-6 sm:px-6">
                  <div className="flex items-end gap-4">
                    <Icon className="size-7 text-primary" />
                    <p className="text-4xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </dl>
        </SectionReveal>
      </div>
    </section>
  )
}
