import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/section-reveal'
import { providers } from '@/lib/site-data'
import { ArrowRight, BadgeCheck } from 'lucide-react'

export function Providers() {
  return (
    <section id="team" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-4xl">
            A clinical team built around movement and recovery
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Our specialists combine sports medicine expertise with hands on
            care, so you get a plan that is both precise and realistic.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {providers.map((provider, i) => (
            <SectionReveal as="article" key={provider.id} delay={i * 100}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border/60 bg-background/60 p-6 sm:flex-row sm:items-start">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-border/60">
                  <Image
                    src={provider.image}
                    alt={`Portrait of ${provider.name}, ${provider.credentials}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {provider.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
                        <BadgeCheck className="size-3.5 text-primary" />
                        {provider.credentials}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-primary/80">{provider.role}</p>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {provider.bio}
                  </p>
                  {provider.contactHref ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      nativeButton={false}
                      className="mt-1 w-fit px-0 text-primary hover:bg-transparent hover:text-primary"
                      render={<Link href={provider.contactHref} />}
                    >
                      Contact {provider.name.split(' ')[1]}
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  ) : null}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
