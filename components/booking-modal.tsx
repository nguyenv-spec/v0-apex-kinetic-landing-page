'use client'

import { useEffect, useMemo, useState } from 'react'
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
import { CheckCircle2, CalendarDays, Clock3, Sparkles } from 'lucide-react'

export function BookingModal() {
  const { open, setOpen, presetService } = useBooking()
  const [step, setStep] = useState<1 | 2>(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [service, setService] = useState<string>('')
  const [timeSlot, setTimeSlot] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const serviceTitle = (id?: string) =>
    services.find((s) => s.id === id)?.title ?? ''

  const timeSlots = [
    '8:30 AM',
    '10:00 AM',
    '11:30 AM',
    '1:30 PM',
    '3:00 PM',
  ]

  const canContinue = Boolean(service && name && email && phone)
  const canConfirm = Boolean(date && timeSlot)

  // Sync the preset service whenever the modal is opened from a specific CTA.
  useEffect(() => {
    if (open) {
      setStep(1)
      setService(serviceTitle(presetService) || '')
      setDate(undefined)
      setTimeSlot('')
      setName('')
      setEmail('')
      setPhone('')
      setSubmitted(false)
    }
  }, [open, presetService])

  function handleContinue() {
    setStep(2)
  }

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
                was saved, and our front desk would normally confirm your visit
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
                Schedule your injury evaluation
              </DialogTitle>
              <DialogDescription>
                Choose a date and service. Our team will confirm the exact time
                with you directly.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border/60 bg-background/70 px-3 py-3 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              Same week assessments available for urgent injuries
            </div>

            {step === 1 ? (
              <div className="space-y-6">
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
                            <SelectItem key={s.id} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="name">Full name</FieldLabel>
                    <Input
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Jordan Avery"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(617) 555-0100"
                    />
                  </Field>
                </FieldGroup>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="w-full max-w-[420px]"
                    onClick={handleContinue}
                    disabled={!canContinue}
                  >
                    Continue to time selection
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <p className="text-sm font-medium text-foreground">
                    Step 2 of 2 — Choose a date and time
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Select when you'd like to meet, then confirm your request.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/40 p-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CalendarDays className="size-4 text-primary" />
                      Choose a date
                    </div>
                    <div className="flex justify-center rounded-xl bg-background/70 p-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={{ before: new Date() }}
                        className="bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/40 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Clock3 className="size-4 text-primary" />
                      Choose a time slot
                    </div>
                    <div className="grid gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`rounded-2xl border px-4 py-3 text-left transition ${
                            timeSlot === slot
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border/60 bg-background/80 text-muted-foreground'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/70 px-3 py-3 text-sm text-muted-foreground">
                  <Clock3 className="size-4 text-primary" />
                  Most requests are confirmed within one business day.
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleConfirm}
                    disabled={!canConfirm}
                  >
                    Confirm Appointment
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
