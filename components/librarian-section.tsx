export function LibrarianSection() {
  return (
    <section id="librarian" aria-labelledby="librarian-heading" className="bg-grid">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Main librarian</p>
          <h2 id="librarian-heading" className="text-chrome text-5xl font-bold tracking-tight md:text-7xl">
            Jonny Tran
          </h2>
        </div>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          The main librarian of the Artist Designer Toys Library.
        </p>
      </div>
    </section>
  )
}
