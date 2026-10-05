import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { RecordSection } from '@/components/record-section'
import { LibrarySection } from '@/components/library-section'
import { LibrarianSection } from '@/components/librarian-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <LibrarySection />
        <RecordSection />
        <LibrarianSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>Artist Designer Toys Library</span>
          <span>Librarian — Jonny Tran</span>
        </div>
      </footer>
    </>
  )
}
