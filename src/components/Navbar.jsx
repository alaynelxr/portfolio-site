import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Selected Works' },
  { to: '/about', label: 'About Me' },
  { to: '/experience', label: 'Experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const sentinelRef = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    // On non-home pages, always show the scrolled state
    if (location.pathname !== '/') {
      setScrolled(true)
      return
    }

    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) {
      setScrolled(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full px-4 py-2.5 flex items-center gap-6"
        style={{
          width: 'min(calc(100vw - 2rem), 640px)',
          background: scrolled ? 'rgba(255,251,245,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled ? '1px solid rgba(107,95,78,0.18)' : '1px solid rgba(255,255,255,0.1)',
          boxShadow: scrolled ? '0 4px 24px rgba(44,36,24,0.08)' : 'none',
        }}
      >
        {/* Name */}
        <Link
          to="/"
          className="font-sans font-medium text-sm tracking-tight flex-shrink-0 transition-colors duration-300"
          style={{ color: scrolled ? '#2C2418' : '#FFFBF5' }}
        >
          Alayne Loo
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-end">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  background: active ? '#C4622A' : 'transparent',
                  color: active ? '#FFFBF5' : scrolled ? '#6B5F4E' : 'rgba(255,255,255,0.75)',
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-1 rounded-full transition-colors"
          style={{ color: scrolled ? '#2C2418' : '#FFFBF5' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'var(--bg)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-serif italic text-3xl"
              style={{ color: 'var(--text)' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
