import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Mail, Linkedin } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      const cards = gridRef.current.querySelectorAll("[data-card]");
      gsap.from(cards, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--bg)" }} className="pt-28 md:pt-32">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div ref={headerRef} className="px-6 md:px-16 max-w-6xl mx-auto mb-16">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--muted)" }}
        >
          Selected Works
        </p>
        <h1
          className="font-serif italic leading-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          Seven projects.
          <br />
          <span style={{ color: "var(--accent)" }}>Real outcomes.</span>
        </h1>
        <p
          className="text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Product work across fintech, SaaS, and AI along with some personal
          learnings.
        </p>
      </div>

      {/* ── Case Study Grid ─────────────────────────────────────────── */}
      <div ref={gridRef} className="px-6 md:px-16 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} cs={cs} featured={i === 0} />
          ))}
        </div>
      </div>

      {/* ── Blog / Writing ──────────────────────────────────────────── */}
      <section
        className="mx-6 md:mx-16 rounded-[2rem] px-8 md:px-14 py-14 mb-10"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--muted)" }}
            >
              Writing
            </p>
            <h2
              className="font-serif italic leading-tight mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              Minor Turbulence
            </h2>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "var(--muted)" }}
            >
              A Substack on technical PM practices — Claude Code setups, custom
              AI skills, building for ambiguity.
            </p>
          </div>
          <a
            href="https://minorturbulence.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-shrink-0"
          >
            <span className="btn-bg" />
            <span className="btn-label flex items-center gap-2">
              <BookOpen size={14} /> Read on Substack
            </span>
          </a>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
    </div>
  );
}

function CaseStudyCard({ cs, featured }) {
  return (
    <Link
      to={`/work/${cs.slug}`}
      data-card
      className="group relative overflow-hidden rounded-[2rem] flex flex-col"
      style={{ background: "var(--surface)" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: "60%" }}
      >
        <img
          src={cs.image}
          alt={cs.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,20,10,0.75) 0%, transparent 55%)",
          }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(28,20,10,0.65)",
              color: "#F2EDE4",
              backdropFilter: "blur(8px)",
            }}
          >
            {cs.company}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {cs.metrics.slice(0, 2).map((m) => (
            <span
              key={m}
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ background: "#D87A4A", color: "#1E1A14" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p
          className="font-mono text-xs uppercase tracking-wider mb-1.5"
          style={{ color: "var(--muted)" }}
        >
          {cs.label}
        </p>
        <h3
          className="font-sans font-medium leading-snug mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{
            fontSize: "0.95rem",
            color: "var(--text)",
            letterSpacing: "-0.01em",
          }}
        >
          {cs.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-3 line-clamp-2"
          style={{ color: "var(--muted)" }}
        >
          {cs.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: "var(--bg)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className="mt-auto flex items-center gap-1 text-xs font-medium"
          style={{ color: "var(--accent)" }}
        >
          Read more{" "}
          <ArrowRight
            size={11}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
