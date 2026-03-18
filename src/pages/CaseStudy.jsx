import { useEffect, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'

gsap.registerPlugin(ScrollTrigger)

// Render body text: bold **text** and newlines
function BodyText({ text }) {
  const paragraphs = text.split('\n\n').filter(Boolean)
  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => {
        // Handle bullet lists
        if (para.startsWith('- ')) {
          const items = para.split('\n').filter((l) => l.startsWith('- '))
          return (
            <ul key={i} className="space-y-2 ml-4">
              {items.map((item, j) => (
                <li key={j} className="flex gap-2 text-base leading-relaxed" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                  <span dangerouslySetInnerHTML={{ __html: renderBold(item.replace(/^- /, '')) }} />
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p
            key={i}
            className="text-base leading-relaxed"
            style={{ color: 'var(--text)' }}
            dangerouslySetInnerHTML={{ __html: renderBold(para) }}
          />
        )
      })}
    </div>
  )
}

function CodeBlock({ filename, code }) {
  const [expanded, setExpanded] = useState(false)
  const PREVIEW_LINES = 20
  const lines = code.split('\n')
  const visibleLines = expanded ? lines : lines.slice(0, PREVIEW_LINES)
  const hasMore = lines.length > PREVIEW_LINES

  function lineColor(line) {
    if (/^#{1,3} /.test(line)) return '#D87A4A'
    if (/^- \*\*/.test(line)) return '#F2EDE4'
    if (/^---/.test(line)) return 'rgba(242,237,228,0.2)'
    return 'rgba(242,237,228,0.75)'
  }

  function renderLine(line) {
    // Highlight inline backtick spans in sage
    return line.replace(/`([^`]+)`/g, '<span style="color:#3DAE82;background:rgba(61,174,130,0.1);padding:0 3px;border-radius:3px">$1</span>')
      .replace(/\*\*([^*]+)\*\*/g, '<span style="color:#F2EDE4;font-weight:600">$1</span>')
  }

  return (
    <div className="rounded-[1.5rem] overflow-hidden my-8" style={{ background: '#1E1A14', border: '1px solid rgba(242,237,228,0.08)' }}>
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: '1px solid rgba(242,237,228,0.08)' }}>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(242,237,228,0.15)' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(242,237,228,0.15)' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(242,237,228,0.15)' }} />
        </div>
        <span className="font-mono text-xs" style={{ color: '#D87A4A' }}>{filename}</span>
      </div>

      {/* Code area */}
      <div className="relative">
        <pre className="px-5 py-4 overflow-x-auto" style={{ fontFamily: '"Source Code Pro", monospace', fontSize: '0.78rem', lineHeight: '1.7' }}>
          {visibleLines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span style={{ color: 'rgba(242,237,228,0.2)', userSelect: 'none', minWidth: '1.5rem', textAlign: 'right', flexShrink: 0 }}>
                {i + 1}
              </span>
              <span style={{ color: lineColor(line) }} dangerouslySetInnerHTML={{ __html: renderLine(line) }} />
            </div>
          ))}
        </pre>
        {!expanded && hasMore && (
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #1E1A14 0%, transparent 100%)' }} />
        )}
      </div>

      {/* Toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:opacity-80"
          style={{ color: '#D87A4A', borderTop: '1px solid rgba(242,237,228,0.08)' }}
        >
          {expanded ? '↑ collapse' : '↓ show more'}
        </button>
      )}
    </div>
  )
}

function renderBold(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--accent);text-decoration:underline;text-underline-offset:3px;">$1</a>')
}

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug)
  const prev = caseStudies[currentIndex - 1]
  const next = caseStudies[currentIndex + 1]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!cs) return

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(headerRef.current.children, {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // Content sections
      const sections = contentRef.current.querySelectorAll('[data-section]')
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })
    })

    return () => ctx.revert()
  }, [cs, slug])

  if (!cs) return <Navigate to="/work" replace />

  return (
    <div style={{ background: 'var(--bg)' }} className="pt-24 md:pt-28">
      {/* ── Hero image ─────────────────────────────────────────────── */}
      <div className="relative mx-4 md:mx-8 rounded-[2rem] overflow-hidden mb-12" style={{ height: 'clamp(240px, 40vw, 520px)' }}>
        <img
          src={cs.heroImage}
          alt={cs.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,20,10,0.85) 0%, rgba(28,20,10,0.2) 60%, transparent 100%)' }}
        />
        {/* Company label over image */}
        <div className="absolute bottom-6 left-8">
          <span
            className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(28,20,10,0.7)', color: '#F2EDE4', backdropFilter: 'blur(10px)' }}
          >
            {cs.company}
          </span>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-10 transition-colors duration-200 hover:text-[var(--accent)]"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={12} /> Back to work
        </Link>

        {/* ── Header ─────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {cs.label}
          </p>
          <h1
            className="font-serif italic leading-tight mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            {cs.title}
          </h1>
          <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--muted)' }}>
            {cs.subtitle}
          </p>

        </div>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="w-full h-px mb-14" style={{ background: 'var(--muted)', opacity: 0.15 }} />

        {/* ── Sections ────────────────────────────────────────────── */}
        <div ref={contentRef} className="space-y-14 mb-20">
          {cs.sections.map((section) => (
            <div key={section.heading} data-section>
              {section.heading && (
                <h2
                  className="font-sans font-medium mb-5 pb-3"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    borderBottom: '1px solid var(--muted)',
                    opacity: 0.7,
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.type === 'code'
                ? <CodeBlock filename={section.filename} code={section.code} />
                : <BodyText text={section.body} />
              }
              {section.quote && (
                <blockquote
                  className="mt-8 pl-6 py-2"
                  style={{ borderLeft: `3px solid var(--accent)` }}
                >
                  <p
                    className="font-serif italic leading-relaxed"
                    style={{ fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '-0.01em' }}
                  >
                    "{section.quote}"
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* ── Tags ────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-16">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--muted)', opacity: 0.7 }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* ── Prev / Next ──────────────────────────────────────────── */}
        <div className="w-full h-px mb-12" style={{ background: 'var(--muted)', opacity: 0.15 }} />
        <div className="flex justify-between gap-6 mb-20">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="group flex flex-col gap-1 flex-1"
            >
              <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
                <ArrowLeft size={11} /> Previous
              </span>
              <span className="text-sm font-medium leading-snug" style={{ color: 'var(--text)' }}>
                {prev.title}
              </span>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group flex flex-col gap-1 flex-1 text-right items-end"
            >
              <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
                Next <ArrowRight size={11} />
              </span>
              <span className="text-sm font-medium leading-snug" style={{ color: 'var(--text)' }}>
                {next.title}
              </span>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  )
}
