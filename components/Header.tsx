'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? 'bg-sand/96 backdrop-blur-sm border-b border-nude/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className={`font-heading text-lg tracking-wide shrink-0 transition-colors duration-300 ${
            scrolled ? 'text-ink' : 'text-sand'
          }`}
        >
          {siteConfig.brand.name}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navigation principale"
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                scrolled
                  ? 'text-ink/70 hover:text-ink'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden sm:inline-flex items-center px-5 py-2.5 font-body text-sm tracking-wide transition-all duration-300 ${
              scrolled
                ? 'bg-cta text-white hover:bg-cta/90'
                : 'bg-white/15 text-white border border-white/40 hover:bg-white/25'
            }`}
          >
            Prendre rendez-vous
          </Link>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="w-6 flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-px transition-all duration-200 ${
                    scrolled ? 'bg-ink' : 'bg-white'
                  } ${
                    i === 0 && menuOpen
                      ? 'rotate-45 translate-y-2.5'
                      : i === 1 && menuOpen
                        ? 'opacity-0'
                        : i === 2 && menuOpen
                          ? '-rotate-45 -translate-y-2.5'
                          : ''
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="lg:hidden bg-sand border-t border-nude/20 px-6 py-8 flex flex-col gap-5"
          aria-label="Navigation mobile"
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base text-ink/75 hover:text-ink transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex justify-center items-center px-5 py-3.5 bg-cta text-white font-body text-sm tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Prendre rendez-vous
          </Link>
        </nav>
      )}
    </header>
  )
}
