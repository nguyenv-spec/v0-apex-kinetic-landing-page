import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionReveal } from '@/components/section-reveal'
import { BookServiceButton } from '@/components/book-service-button'
import { services } from '@/lib/site-data'
import { CreditCard } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Services & Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Flat rate, no surprise pricing for every visit. Choose the care that
            fits your goals and book in seconds.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <SectionReveal as="article" key={service.id} delay={i * 80}>
              <Card className="glass h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="secondary">{service.duration}</Badge>
                    <span className="font-mono text-2xl font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-primary/80">
                    {service.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <BookServiceButton serviceId={service.id} />
                </CardFooter>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10">
          <div className="glass mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-xl px-5 py-4 text-center text-sm text-muted-foreground">
            <CreditCard className="size-4 shrink-0 text-primary" />
            <p className="text-pretty">
              We accept HSA/FSA cards. Detailed superbills provided for
              out of network insurance reimbursement.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
