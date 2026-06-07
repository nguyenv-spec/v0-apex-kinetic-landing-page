'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms before the reveal transition begins. */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Reusable scroll-in animation wrapper. Adds `.is-visible` once the element
 * enters the viewport. Respects prefers-reduced-motion via globals.css.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: SectionRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
