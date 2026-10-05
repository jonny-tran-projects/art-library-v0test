import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type Entry = {
  id: string
  artist: string
  image: string
  alt: string
}

const entries: Entry[] = [
  {
    id: '001',
    artist: 'Takashi Murakami',
    image: '/images/toys/takashi-murakami.jpg',
    alt: 'Two round character head figures by Takashi Murakami, one in gold and silver, one in red and blue',
  },
  {
    id: '002',
    artist: 'James Jean',
    image: '/images/toys/james-jean-maze.jpg',
    alt: 'Pale grey figure of a girl with a hair bun and caped dress holding a gold labyrinth wire, on a round base, by James Jean',
  },
  {
    id: '003',
    artist: 'KAWS',
    image: '/images/toys/kaws.jpg',
    alt: 'Three KAWS figures in grey, black, and brown, each carrying smaller figures',
  },
  {
    id: '004',
    artist: 'Yoshitomo Nara',
    image: '/images/toys/yoshitomo-nara-party.jpg',
    alt: 'Three Yoshitomo Nara figures in teal, green, and red dresses with party hats numbered 1, 2, and 3, holding gold mallets',
  },
  {
    id: '005',
    artist: 'Futura',
    image: '/images/toys/futura.jpg',
    alt: 'Black angular figure standing on a round black base, by Futura',
  },
  {
    id: '006',
    artist: 'Javier Calleja',
    image: '/images/toys/javier-calleja.jpg',
    alt: 'Javier Calleja figures: a stack of big-eyed heads and a boy in a red beanie holding a No Art Here sign',
  },
]

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
            {`${entries.length} entries`}
          </span>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li key={entry.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card">
                <div className="relative aspect-[4/5] border-b border-border bg-white">
                  <Image
                    src={entry.image || '/placeholder.svg'}
                    alt={entry.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.3em] text-neutral-500">
                    {`NO. ${entry.id}`}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-6">
                  <h3 className="text-lg font-semibold text-muted-foreground">Toy name</h3>
                  <p className="text-sm text-foreground">{entry.artist}</p>
                  <a
                    href="#record"
                    className="mt-4 inline-flex w-fit items-center gap-1 border-b border-foreground/40 pb-0.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
                  >
                    Read more
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">{`about entry ${entry.id} by ${entry.artist}`}</span>
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
