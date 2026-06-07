'use client'

import { useState } from 'react'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Send } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Prototype only — no data captured or persisted.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Message sent
          </h3>
          <p className="mt-1 text-pretty text-muted-foreground">
            This is a prototype, so nothing was stored. Dr. Vance&apos;s team
            would normally reply within one business day.
          </p>
        </div>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="contact-name">Full name</FieldLabel>
          <Input id="contact-name" placeholder="Jordan Avery" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-phone">Phone (optional)</FieldLabel>
          <Input id="contact-phone" type="tel" placeholder="(617) 555-0100" />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            rows={5}
            placeholder="Tell Dr. Vance about your injury, goals, or questions…"
            required
          />
        </Field>
        <Button type="submit" size="lg" className="w-full">
          <Send data-icon="inline-start" />
          Send Message
        </Button>
      </FieldGroup>
    </form>
  )
}
