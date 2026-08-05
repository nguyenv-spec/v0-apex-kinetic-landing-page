import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingProvider } from '@/components/booking-context'
import { BookingModal } from '@/components/booking-modal'
import { JoinProgramModal } from '@/components/join-program-modal'
import { LearnMoreModal } from '@/components/learn-more-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Blog | Apex Kinetic',
  description:
    'Read injury care advice, recovery strategies, and performance insights from the Apex Kinetic team.',
  alternates: {
    canonical: 'https://v0-apex-kinetic-landing-page.vercel.app/blog',
  },
}

export default function BlogPage() {
  return (
    <BookingProvider>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 lg:px-10">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Injury care and performance insights
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Helpful articles for athletes, weekend warriors, and anyone recovering from injury.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <SectionReveal key={post.id} delay={index * 70}>
              <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="rounded-full bg-background/80 px-3 py-1 text-muted-foreground">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-4 space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    render={<Link href={`/blog/${post.id}`} />}
                    className="px-0 text-primary"
                  >
                    Read article
                  </Button>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-16 text-center">
          <Button
            variant="secondary"
            size="lg"
            render={<Link href="/contact" />}
          >
            Book a consultation
          </Button>
        </SectionReveal>
      </main>
      <Footer />
      <BookingModal />
      <JoinProgramModal />
      <LearnMoreModal />
    </BookingProvider>
  )
}
