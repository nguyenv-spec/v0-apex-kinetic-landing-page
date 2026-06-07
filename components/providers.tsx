import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/section-reveal'
import { providers } from '@/lib/site-data'
import { ArrowRight } from 'lucide-react'

export function Providers() {
  return (
    <section id="team" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Meet Your Recovery Team
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Specialists who treat the cause, not just the symptom — so you
            return stronger than before.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {providers.map((provider, i) => (
            <SectionReveal as="article" key={provider.id} delay={i * 100}>
              <Card className="glass h-full overflow-hidden">
                <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
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
                      <h3 className="text-xl font-semibold text-foreground">
                        {provider.name}
                        <span className="ml-2 text-sm font-normal text-primary">
                          {provider.credentials}
                        </span>
                      </h3>
                      <p className="text-sm text-primary/80">{provider.role}</p>
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
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
