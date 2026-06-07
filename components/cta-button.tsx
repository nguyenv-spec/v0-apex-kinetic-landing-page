'use client'

import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'
import { CalendarCheck } from 'lucide-react'
import type { ComponentProps } from 'react'

type CtaButtonProps = {
  label?: string
  service?: string
  withIcon?: boolean
} & Omit<ComponentProps<typeof Button>, 'onClick'>

/**
 * Single source of truth for every "Book Appointment" action.
 * Opens the shared booking modal. Style/size variants via props.
 */
export function CtaButton({
  label = 'Book Appointment',
  service,
  withIcon = true,
  size = 'lg',
  ...props
}: CtaButtonProps) {
  const { openBooking } = useBooking()

  return (
    <Button size={size} onClick={() => openBooking(service)} {...props}>
      {withIcon ? <CalendarCheck data-icon="inline-start" /> : null}
      {label}
    </Button>
  )
}
