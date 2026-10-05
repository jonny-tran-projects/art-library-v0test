const artistFields = ['Artist name', 'City located in', 'Year toy released']

const toyFields = [
  { label: 'Manufactured', detail: 'Where the toy was manufactured' },
  { label: 'Inspiration', detail: 'The inspiration behind the toy' },
  { label: 'Full details', detail: 'A full description of the toy and how it was made' },
  { label: 'Concept', detail: 'How it was concepted by the artist' },
  { label: 'Colorways', detail: 'Every colorway of the toy' },
  { label: 'Related toys', detail: 'Other toys that are related or look the same' },
]

export function RecordSection() {
  return (
    <section id="record" aria-labelledby="record-heading" className="bg-grid border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-4">
          <h2 id="record-heading" className="text-chrome text-3xl font-bold tracking-tight md:text-5xl">
            Inside every record
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Clicking Read more on any entry opens the full record, containing the following.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="rounded-sm border border-border bg-card p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {'// The artist'}
            </p>
            <ul className="flex flex-col divide-y divide-border">
              {artistFields.map((field) => (
                <li key={field} className="flex items-center justify-between py-4">
                  <span className="text-foreground">{field}</span>
                  <span aria-hidden="true" className="bg-chrome size-1.5 rounded-full" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-card p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {'// The toy'}
            </p>
            <dl className="grid gap-x-8 sm:grid-cols-2">
              {toyFields.map((field) => (
                <div key={field.label} className="flex flex-col gap-1 border-t border-border py-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">{field.label}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{field.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
