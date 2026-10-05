import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {'// Database — Homepage'}
          </p>
          <h1 className="text-chrome text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Artist Designer Toys Library
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            A library with images and detailed descriptions of the artist and the toy — from where it was
            made and what inspired it, to how it was concepted, its colorways, and the toys related to it.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#library"
              className="bg-chrome inline-flex items-center gap-2 rounded-sm px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enter the library
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent"
            >
              About the project
            </a>
          </div>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-border">
          <Image
            src="/images/chrome-hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border bg-background/70 px-4 py-3 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Librarian
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">Jonny Tran</span>
          </div>
        </div>
      </div>
    </section>
  )
}
