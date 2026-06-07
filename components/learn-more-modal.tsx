'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'
import { program, programReasons } from '@/lib/site-data'
import { Check } from 'lucide-react'

export function LearnMoreModal() {
  const { learnMoreOpen, setLearnMoreOpen, openJoin } = useBooking()

  function handleJoin() {
    setLearnMoreOpen(false)
    // Wait for the first dialog to fully close before opening the next,
    // otherwise Base UI's focus/scroll-lock management cancels the second open.
    setTimeout(openJoin, 200)
  }

  return (
    <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
      <DialogContent className="glass-strong max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Why join the {program.name}?
          </DialogTitle>
          <DialogDescription>{program.description}</DialogDescription>
        </DialogHeader>

        <ul className="flex flex-col gap-4">
          {programReasons.map((reason) => (
            <li key={reason.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-4" />
              </span>
              <div>
                <p className="font-medium text-foreground">{reason.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Button size="lg" className="w-full" onClick={handleJoin}>
          Join Program
        </Button>
      </DialogContent>
    </Dialog>
  )
}
