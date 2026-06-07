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
  joinOpen: boolean
  openJoin: () => void
  setJoinOpen: (open: boolean) => void
  learnMoreOpen: boolean
  openLearnMore: () => void
  setLearnMoreOpen: (open: boolean) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [presetService, setPresetService] = useState<string | undefined>(
    undefined,
  )
  const [joinOpen, setJoinOpen] = useState(false)
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)

  const openBooking = useCallback((service?: string) => {
    setPresetService(service)
    setOpen(true)
  }, [])

  const openJoin = useCallback(() => setJoinOpen(true), [])
  const openLearnMore = useCallback(() => setLearnMoreOpen(true), [])

  const value = useMemo(
    () => ({
      open,
      presetService,
      openBooking,
      setOpen,
      joinOpen,
      openJoin,
      setJoinOpen,
      learnMoreOpen,
      openLearnMore,
      setLearnMoreOpen,
    }),
    [open, presetService, openBooking, joinOpen, openJoin, learnMoreOpen, openLearnMore],
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
