import { ArrowUpRight } from 'lucide-react'

const slots = ['001', '002', '003']

export function LibrarySection() {
  return (
    <section id="library" aria-labelledby="library-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 id="library-heading" className="text-chrome text-3xl font-bold tracking-tight md:text-5xl">
              The library
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Each entry on the homepage shows the main image, the toy name, and the artist — with a Read more
              link underneath.
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Awaiting first entries
          </span>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot) => (
            <li key={slot}>
              <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card">
                <div className="bg-grid relative flex aspect-[4/5] items-center justify-center border-b border-border">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Main image
                  </span>
                  <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {`NO. ${slot}`}
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <h3 className="text-lg font-semibold text-foreground">Toy name</h3>
                  <p className="text-sm text-muted-foreground">Artist</p>
                  <a
                    href="#record"
                    className="mt-4 inline-flex w-fit items-center gap-1 border-b border-foreground/40 pb-0.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
                  >
                    Read more
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">{`about entry ${slot}`}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
