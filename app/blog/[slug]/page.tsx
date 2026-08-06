import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookingProvider } from '@/components/booking-context'
import { BookingModal } from '@/components/booking-modal'
import { JoinProgramModal } from '@/components/join-program-modal'
import { LearnMoreModal } from '@/components/learn-more-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/site-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.id === slug)

  if (!post) {
    return {
      title: 'Blog | Apex Kinetic',
      description: 'Apex Kinetic blog articles and injury care insights.',
    }
  }

  return {
    title: `${post.title} | Apex Kinetic`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.id === slug)

  if (!post) {
    notFound()
  }

  return (
    <BookingProvider>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 lg:px-10">
        <SectionReveal>
          <div className="max-w-3xl rounded-[2rem] border border-border/60 bg-background/70 p-8 shadow-sm sm:p-10">
            <div className="rounded-2xl border border-dashed border-border/70 bg-secondary/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Article preview
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="rounded-full bg-background/80 px-3 py-1 text-muted-foreground">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </div>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <Button
                variant="ghost"
                size="sm"
                render={<Link href="/blog" />}
                className="px-0 text-primary"
              >
                Back to blog
              </Button>
            </div>
          </div>
        </SectionReveal>
      </main>
      <Footer />
      <BookingModal />
      <JoinProgramModal />
      <LearnMoreModal />
    </BookingProvider>
  )
}
