const points = [
  {
    index: '01',
    title: 'What it is',
    body: 'A library with images and detailed descriptions of artist designer toys and the artists who make them.',
  },
  {
    index: '02',
    title: 'Why it matters',
    body: 'This page serves as the homepage of the library — the front door to the database.',
  },
  {
    index: '03',
    title: 'Where to read more',
    body: 'The homepage shows only the main image, toy name, and artist. A Read more link under each entry opens the full record.',
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 id="about-heading" className="text-chrome text-3xl font-bold tracking-tight md:text-5xl">
            The project
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">
            {'[ 03 ]'}
          </span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {points.map((point) => (
            <article key={point.index} className="flex flex-col gap-6 bg-background p-8">
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{point.index}</span>
              <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
