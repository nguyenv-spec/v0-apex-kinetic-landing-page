'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'
import { services } from '@/lib/site-data'
import { CheckCircle2 } from 'lucide-react'

export function BookingModal() {
  const { open, setOpen, presetService } = useBooking()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [service, setService] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  // Sync the preset service whenever the modal is opened from a specific CTA.
  useEffect(() => {
    if (open) {
      setService(presetService ?? '')
      setSubmitted(false)
    }
  }, [open, presetService])

  function handleConfirm() {
    // Prototype only — no submission, no data captured. Local success state.
    setSubmitted(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass-strong max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="size-14 text-primary" />
            <DialogHeader className="items-center">
              <DialogTitle className="text-2xl">
                Request received
              </DialogTitle>
              <DialogDescription className="max-w-sm text-pretty">
                Thanks for reaching out. This is a prototype, so no information
                was saved — our front desk would normally confirm your visit
                within one business day.
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Book your appointment
              </DialogTitle>
              <DialogDescription>
                Choose a date and service. Our team will confirm the exact time
                with you directly.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex justify-center rounded-xl border border-border/60 bg-background/40 p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={{ before: new Date() }}
                  className="bg-transparent"
                />
              </div>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="service">Service</FieldLabel>
                  <Select
                    value={service}
                    onValueChange={(value) => setService(value ?? '')}
                  >
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {services.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" placeholder="Jordan Avery" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" type="tel" placeholder="(617) 555-0100" />
                </Field>
              </FieldGroup>
            </div>

            <Button size="lg" className="w-full" onClick={handleConfirm}>
              Confirm Appointment
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
