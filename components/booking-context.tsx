'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type BookingContextValue = {
  open: boolean
  presetService?: string
  openBooking: (service?: string) => void
  setOpen: (open: boolean) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [presetService, setPresetService] = useState<string | undefined>(
    undefined,
  )

  const openBooking = useCallback((service?: string) => {
    setPresetService(service)
    setOpen(true)
  }, [])

  const value = useMemo(
    () => ({ open, presetService, openBooking, setOpen }),
    [open, presetService, openBooking],
  )

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return ctx
}
