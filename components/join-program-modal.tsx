'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'
import { program } from '@/lib/site-data'
import { CheckCircle2, Sparkles } from 'lucide-react'

export function JoinProgramModal() {
  const { joinOpen, setJoinOpen } = useBooking()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (joinOpen) setSubmitted(false)
  }, [joinOpen])

  function handleSubmit() {
    // Prototype only — no submission, no data captured. Local success state.
    setSubmitted(true)
  }

  return (
    <Dialog open={joinOpen} onOpenChange={setJoinOpen}>
      <DialogContent className="glass-strong max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="size-14 text-primary" />
            <DialogHeader className="items-center">
              <DialogTitle className="text-2xl">You&apos;re on the list</DialogTitle>
              <DialogDescription className="max-w-sm text-pretty">
                Thanks for your interest in the {program.name}. This is a
                prototype, so no information was saved, and our team would normally
                reach out within one business day to finalize your enrollment.
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" onClick={() => setJoinOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Join the {program.name}
              </DialogTitle>
              <DialogDescription>{program.tagline}</DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-background/70 px-3 py-3 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              Priority access, proactive care, and direct provider support.
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="join-name">Full name</FieldLabel>
                <Input id="join-name" placeholder="Jordan Avery" />
              </Field>
              <Field>
                <FieldLabel htmlFor="join-email">Email</FieldLabel>
                <Input
                  id="join-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="join-phone">Phone</FieldLabel>
                <Input
                  id="join-phone"
                  type="tel"
                  placeholder="(617) 555-0100"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="join-sport">Primary sport or activity</FieldLabel>
                <Input id="join-sport" placeholder="Marathon running" />
              </Field>
            </FieldGroup>

            <Button size="lg" className="w-full" onClick={handleSubmit}>
              Request Enrollment
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
