'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { CtaButton } from '@/components/cta-button'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { clinic, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Menu, MapPin, Phone } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-strong border-b border-border/60 shadow-lg shadow-background/40'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div
        className={cn(
          'hidden border-b border-border/60 px-4 py-2 text-sm backdrop-blur md:block',
          scrolled ? 'bg-background/95 text-muted-foreground' : 'bg-transparent text-white',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href={clinic.phoneHref}
              className={cn(
                'inline-flex items-center gap-2 font-medium hover:text-primary',
                scrolled ? 'text-foreground' : 'text-white',
              )}
            >
              <Phone className="size-4" />
              {clinic.phone}
            </a>
            <span className={cn('inline-flex items-center gap-2', scrolled ? 'text-foreground' : 'text-white')}>
              <MapPin className="size-4" />
              {clinic.address.line1}, {clinic.address.city}
            </span>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo textClass={scrolled ? 'text-foreground' : 'text-white'} />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white hover:text-slate-100',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <CtaButton size="lg" className="h-12 px-6 text-base" />
        </div>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={scrolled ? undefined : 'text-white'}
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="glass-strong w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo textClass={scrolled ? 'text-foreground' : 'text-white'} />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto px-4 pb-6">
                <CtaButton size="lg" className="w-full h-12 px-6 text-base" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
