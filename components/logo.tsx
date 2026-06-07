import Image from 'next/image'
import Link from 'next/link'
import { clinic } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5', className)}
      aria-label={`${clinic.name} home`}
    >
      <Image
        src="/images/apex-kinetic-logo.png"
        alt=""
        width={36}
        height={36}
        className="size-9 object-contain"
        priority
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Apex<span className="text-primary">Kinetic</span>
      </span>
    </Link>
  )
}
