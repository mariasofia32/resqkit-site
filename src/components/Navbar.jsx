import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { href: '#problema', label: 'Problema' },
  { href: '#solutia', label: 'Soluția' },
  { href: '#produs', label: 'Produsul' },
  { href: '#echipa', label: 'Echipa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo size={30} />
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#produs" className="btn btn--pill btn--accent nav__cta">
          Descoperă ResQKit
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Deschide meniul"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#produs" className="btn btn--accent" onClick={() => setOpen(false)}>
            Descoperă ResQKit
          </a>
        </div>
      )}
    </header>
  )
}
