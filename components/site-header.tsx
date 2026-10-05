const navItems = [
  { href: '#about', label: 'About' },
  { href: '#library', label: 'Library' },
  { href: '#record', label: 'Record' },
  { href: '#librarian', label: 'Librarian' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span aria-hidden="true" className="bg-chrome size-6 rounded-sm" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground">ADTL</span>
          <span className="sr-only">Artist Designer Toys Library, back to top</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
