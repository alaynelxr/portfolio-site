import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

gsap.registerPlugin(ScrollTrigger);

// Vanilla JS word-split helper
function splitToWordSpans(el) {
  const text = el.innerText;
  const words = text.split(" ");
  el.innerHTML = words
    .map((w) => `<span class="word-reveal-word">${w}</span>`)
    .join(" ");
  return el.querySelectorAll(".word-reveal-word");
}

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance ──────────────────────────────────────────────
      const heroEls = heroRef.current.querySelectorAll("[data-hero]");
      gsap.from(heroEls, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      // ── About word reveal ──────────────────────────────────────────
      const line1El = aboutRef.current?.querySelector("[data-about-line1]");
      const line2Els = aboutRef.current?.querySelectorAll("[data-about-line2]");

      if (line1El) {
        const words = splitToWordSpans(line1El);
        gsap.from(words, {
          scrollTrigger: {
            trigger: line1El,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        });
      }

      if (line2Els) {
        line2Els.forEach((el) => {
          const words = splitToWordSpans(el);
          gsap.from(words, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          });
        });
      }

      // Parallax texture
      const texture = aboutRef.current?.querySelector("[data-texture]");
      if (texture) {
        gsap.to(texture, {
          scrollTrigger: {
            trigger: aboutRef.current,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
          y: -80,
          ease: "none",
        });
      }

      // ── Work cards stagger ─────────────────────────────────────────
      const cards = worksRef.current?.querySelectorAll("[data-card]");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: worksRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16"
        style={{ height: "100dvh", minHeight: "600px" }}
      >
        {/* Hero sentinel for navbar IntersectionObserver */}
        <div id="hero-sentinel" className="absolute top-0 left-0 w-full h-px" />

        {/* Full-bleed background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay: bottom-heavy, warm dark */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(28,20,10,0.96) 20%, rgba(28,20,10,0.7) 80%, rgba(28,20,10,0.15) 100%)",
            }}
          />
        </div>

        {/* Hero content — bottom-left third */}
        <div className="relative z-10 max-w-2xl">
          <p
            data-hero
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: "rgba(242,237,228,0.55)" }}
          >
            Product Manager · Singapore
          </p>

          <div data-hero className="mb-10">
            <span
              className="font-sans font-medium block leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "#F2EDE4",
                letterSpacing: "-0.02em",
              }}
            >
              Building with
            </span>
            <span
              className="font-serif italic block leading-none"
              style={{
                fontSize: "clamp(4rem, 13vw, 10rem)",
                color: "#D87A4A",
                letterSpacing: "-0.03em",
                lineHeight: "0.9",
              }}
            >
              intention
            </span>
          </div>

          <p
            data-hero
            className="text-base md:text-lg mb-8 max-w-md leading-relaxed"
            style={{ color: "rgba(242,237,228,0.7)" }}
          >
            Bringing structure to ambiguity and shipping things that scale.
            Across fintech, SaaS, and AI.
          </p>

          <div data-hero className="flex flex-wrap gap-3">
            <Link to="/work" className="btn btn-primary">
              <span className="btn-bg" />
              <span className="btn-label flex items-center gap-2">
                View my work <ArrowRight size={14} />
              </span>
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost"
              style={{ borderColor: "rgba(242,237,228,0.3)", color: "#F2EDE4" }}
            >
              <span className="btn-label">About me</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ME BRIEF ─────────────────────────────────────────── */}
      <section
        ref={aboutRef}
        className="relative overflow-hidden py-24 md:py-36 px-6 md:px-16"
        style={{ background: "var(--dark)" }}
      >
        {/* Parallax texture */}
        <div
          data-texture
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.06 }}
        >
          <img
            src="https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p
            data-about-line1
            className="font-sans text-lg md:text-xl mb-6 leading-relaxed"
            style={{ color: "rgba(242,237,228,0.65)", maxWidth: "38rem" }}
          >
            Product manager with 5+ years of experience across fintech, SaaS,
            and AI. I've navigated market expansion for 3 markets, earned
            platform certifications, and led enterprise implementations across
            teams from 5 countries.
          </p>

          <p
            data-about-line2
            className="font-serif italic leading-tight mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#F2EDE4",
              letterSpacing: "-0.02em",
            }}
          >
            Finding the real problem
          </p>
          <p
            data-about-line2
            className="font-serif italic leading-tight mb-10"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#D87A4A",
              letterSpacing: "-0.02em",
            }}
          >
            before we solve the wrong one.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
            style={{ color: "#3DAE82" }}
          >
            Read more about me <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── SELECTED WORKS ─────────────────────────────────────────── */}
      <section
        ref={worksRef}
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <h2
                className="font-mono tracking-widest uppercase mb-3"
                style={{ color: "var(--muted)", fontSize: "1rem" }}
              >
                Selected Works
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium self-start md:self-auto transition-all duration-200 hover:gap-3"
              style={{ color: "var(--accent)" }}
            >
              See all work <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards grid — editorial asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {caseStudies.slice(0, 4).map((cs, i) => (
              <WorkCard key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkCard({ cs, index }) {
  // Alternating grid sizes for editorial feel
  const isFeature = index === 0 || index === 3;
  const colSpan = isFeature ? "md:col-span-7" : "md:col-span-5";

  return (
    <Link
      to={`/work/${cs.slug}`}
      data-card
      className={`group relative overflow-hidden rounded-[2rem] ${colSpan} block`}
      style={{ background: "var(--surface)" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: isFeature ? "55%" : "65%" }}
      >
        <img
          src={cs.image}
          alt={cs.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
          style={{
            background:
              "linear-gradient(to top, rgba(28,20,10,0.8) 0%, transparent 60%)",
          }}
        />
        {/* Company tag */}
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(28,20,10,0.6)",
              color: "#F2EDE4",
              backdropFilter: "blur(8px)",
            }}
          >
            {cs.company}
          </span>
        </div>
        {/* Metrics on hover */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {cs.metrics.map((m) => (
            <span
              key={m}
              className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{ background: "#D87A4A", color: "#1E1A14" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <p
          className="font-mono text-xs uppercase tracking-wider mb-2"
          style={{ color: "var(--muted)" }}
        >
          {cs.label}
        </p>
        <h3
          className="font-sans font-medium leading-snug mb-3 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{
            fontSize: "1rem",
            color: "var(--text)",
            letterSpacing: "-0.01em",
          }}
        >
          {cs.title}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "var(--muted)" }}
        >
          {cs.summary}
        </p>
        <div
          className="mt-4 flex items-center gap-1.5 text-xs font-medium"
          style={{ color: "var(--accent)" }}
        >
          Read case study{" "}
          <ArrowRight
            size={12}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
