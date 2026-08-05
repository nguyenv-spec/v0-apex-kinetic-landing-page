'use client'

import { useState } from 'react'
import { SectionReveal } from '@/components/section-reveal'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { blogPosts } from '@/lib/site-data'

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[number] | null>(null)

  return (
    <section id="blog" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Insights
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Latest from the Apex Kinetic blog
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Evidence-based injury care, recovery strategies, and performance tips for athletes and active people.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <SectionReveal key={post.id} delay={index * 70} className="h-full">
              <Card className="h-full">
                <CardHeader className="gap-3 p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="rounded-full bg-background/80 px-3 py-1 text-muted-foreground">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="mt-4 text-lg text-foreground">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.content[0]}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto justify-between gap-4 px-6 pb-6 pt-0">
                  <Button
                    variant="link"
                    className="text-sm font-semibold text-primary"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read article
                  </Button>
                </CardFooter>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>

      <Dialog open={selectedPost !== null} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Prototype preview</DialogTitle>
            <DialogDescription>
              This article is part of an interactive prototype. The full write-up is not available yet, but you can still preview the topic and explore the design.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-xl border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{selectedPost?.title}</p>
            <p className="mt-2 text-sm leading-relaxed">
              {selectedPost?.description}
            </p>
          </div>
          <DialogFooter className="mt-2" showCloseButton>
            <Button variant="default" onClick={() => setSelectedPost(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
