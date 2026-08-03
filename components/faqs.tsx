import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionReveal } from '@/components/section-reveal'
import { faqs } from '@/lib/site-data'

export function Faqs() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-5xl">
            Questions, Answered
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know before your first visit.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10">
          <Accordion className="glass rounded-2xl px-2 sm:px-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold leading-7 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  )
}
