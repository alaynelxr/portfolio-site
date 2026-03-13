import { useEffect, useRef } from "react";
import profileImage from "../assets/profileimage.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function splitToWordSpans(el) {
  const text = el.innerText;
  const words = text.split(" ");
  el.innerHTML = words
    .map((w) => `<span class="word-reveal-word">${w}</span>`)
    .join(" ");
  return el.querySelectorAll(".word-reveal-word");
}

export default function About() {
  const headerRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      const blocks = bodyRef.current.querySelectorAll("[data-reveal]");
      blocks.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 82%" },
          y: 25,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      });

      const headline = bodyRef.current.querySelector("[data-word-reveal]");
      if (headline) {
        const words = splitToWordSpans(headline);
        gsap.from(words, {
          scrollTrigger: { trigger: headline, start: "top 80%" },
          y: 18,
          opacity: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--bg)" }} className="pt-28 md:pt-32">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div ref={headerRef} className="px-6 md:px-16 max-w-5xl mx-auto mb-20">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--muted)" }}
        >
          About Me
        </p>
        <h1
          className="font-serif italic leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "var(--accent)" }}>Hello!</span>
        </h1>
      </div>

      <div ref={bodyRef}>
        {/* ── Photo + intro ───────────────────────────────────────── */}
        <div className="px-6 md:px-16 max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Portrait */}
            <div data-reveal className="md:col-span-4">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
                <img
                  src={profileImage}
                  alt="Alayne Loo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-8 space-y-6">
              <p
                data-reveal
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                I'm Alayne — a product manager based in Singapore with 5+ years
                of experience building products across fintech, SaaS, and AI.
              </p>
              <p
                data-reveal
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                I started my PM career at StashAway, where I shipped features
                for a consumer investment platform and co-led market expansions
                into three new countries within a year. From there, I moved to
                Anafore (ReferralCandy), where I owned the product for a Shopify
                referral marketing tool — driving trial conversions, revamping
                analytics, and earning the "Built for Shopify" certification.
                Most recently, I was at fileAI, an AI startup focused on
                document workflow automation, where I managed enterprise client
                implementations.
              </p>
              <p
                data-reveal
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                What I'm known for: I bring order to ambiguous environments. At
                my previous companies, I created the PM playbook from scratch —
                feedback loops, backlog processes, delivery cadences. I spot
                dependencies before they become blockers and build systems that
                make the people around me more productive.
              </p>
            </div>
          </div>
        </div>

        {/* ── Dark statement section ──────────────────────────────── */}
        <div
          className="relative py-24 md:py-32 px-6 md:px-16 mb-20 overflow-hidden"
          style={{ background: "var(--dark)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <p
              data-word-reveal
              className="font-serif italic leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#F2EDE4",
                letterSpacing: "-0.02em",
              }}
            >
              I'm also deeply curious about the tools and workflows that make
              PMs better.
            </p>
          </div>
        </div>

        {/* ── Writing + interests ─────────────────────────────────── */}
        <div className="px-6 md:px-16 max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-reveal>
              <h2
                className="font-sans font-medium mb-4"
                style={{
                  fontSize: "1rem",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                Writing
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "var(--muted)" }}
              >
                I write about technical PM practices on{" "}
                <a
                  href="https://minorturbulence.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: "var(--text)" }}
                >
                  Minor Turbulence
                </a>
                , where I cover topics from Claude Code setups to building
                custom skills for PRDs and tickets.
              </p>
              <a
                href="https://minorturbulence.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
                style={{ color: "var(--accent)" }}
              >
                Read Minor Turbulence <ArrowRight size={14} />
              </a>
            </div>
            <div data-reveal>
              <h2
                className="font-sans font-medium mb-4"
                style={{
                  fontSize: "1rem",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                Outside of work
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                When I'm not shipping product, you can usually find me upside
                down or reading a book — though probably not both at the same
                time.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA row ─────────────────────────────────────────────── */}
        <div className="px-6 md:px-16 max-w-5xl mx-auto pb-20">
          <div data-reveal className="flex flex-wrap gap-4">
            <Link to="/work" className="btn btn-primary">
              <span className="btn-bg" />
              <span className="btn-label flex items-center gap-2">
                See my work <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/experience" className="btn btn-ghost">
              <span className="btn-label">View experience</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
