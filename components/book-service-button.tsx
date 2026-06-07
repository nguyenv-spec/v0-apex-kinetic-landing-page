'use client'

import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-context'

export function BookServiceButton({ serviceId }: { serviceId: string }) {
  const { openBooking } = useBooking()
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => openBooking(serviceId)}
    >
      Book This Session
    </Button>
  )
}
