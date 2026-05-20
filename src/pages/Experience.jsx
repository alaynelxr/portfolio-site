import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    company: "fileAI",
    role: "Technical Product Manager",
    period: "Jun 2025 – Feb 2026",
    type: "work",
    highlights: [
      "Drove 30% improvement in AI OCR model accuracy by translating client requirements into ML specifications",
      "Managed delivery of enterprise client implementations across 3 agencies and 5 countries for $50K+ MRR",
      "Shipped high-impact API endpoints and maintained documentation for technical users",
    ],
  },
  {
    company: "Anafore (ReferralCandy)",
    role: "Product Manager",
    period: "Mar 2022 – Jun 2025",
    type: "work",
    highlights: [
      'Earned Shopify\'s "Built for Shopify" certification, driving 18% growth in qualified trial conversions',
      "Revamped merchant analytics dashboard, driving 5–15% revenue increase per merchant within 3 months",
      "Reduced ticket resolution times ~50% through cross-functional process optimisation",
      "Grew advocate engagement 15% through new feature suite for Shopify merchants",
    ],
  },
  {
    company: "StashAway",
    role: "Product Manager",
    period: "May 2020 – Feb 2022",
    type: "work",
    highlights: [
      "Co-led on-time expansion into UAE, Hong Kong, and Thailand within 1 year",
      "Launched notification centre with 68% open rate, reducing support queries by 7%",
      "Shipped in-app review prompt within 1 week, increasing App Store/Play Store ratings by 12%",
    ],
  },
];

const technical = [
  {
    company: "MOVEMENT",
    role: "Solo Project",
    period: "2023",
    type: "project",
    highlights: [
      "App for dancers deployed on Vercel — React, Firebase, Node.js, PostgreSQL, Prisma",
    ],
  },
  {
    company: "Booked!",
    role: "Group Project",
    period: "2023",
    type: "project",
    highlights: [
      "Restaurant reservation app deployed on Netlify — React, Auth0, Node.js, Express.js",
    ],
  },
];

const aiBuilds = [
  {
    company: "SplitPot",
    role: "Solo Project",
    period: "2026",
    type: "project",
    link: "/work/splitpot",
    highlights: [
      "Zero-backend receipt splitter deployed on Vercel — Next.js 15, TypeScript, Tesseract.js OCR, Zustand, Tailwind CSS v4. Client-side only: no server, no API costs, no sign-up.",
    ],
  },
  {
    company: "Portfolio Site",
    role: "Solo Project",
    period: "2026",
    type: "project",
    link: "/work/portfolio-site",
    highlights: [
      "Fully custom portfolio site built in a day using Claude Code — React, Vite, Tailwind CSS, GSAP. Designed from a structured Markdown spec with no designer or frontend engineer.",
    ],
  },
];

const education = [
  {
    company: "Rocket Academy",
    role: "Software Engineering Bootcamp",
    period: "Jan 2023 – Nov 2023",
    type: "education",
  },
  {
    company: "Nanyang Technological University",
    role: "Bachelor of Business, Honours (Distinction) · Business Analytics",
    period: " ",
    type: "education",
  },
];

function TimelineSection({ title, items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const entries = sectionRef.current.querySelectorAll("[data-entry]");
      entries.forEach((entry, i) => {
        gsap.from(entry, {
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: -20,
          opacity: 0,
          duration: 0.65,
          delay: i * 0.05,
          ease: "power3.out",
        });
      });

      // Animate the timeline line drawing
      const line = sectionRef.current.querySelector("[data-timeline-line]");
      if (line) {
        gsap.from(line, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mb-20">
      <p
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: "var(--muted)" }}
      >
        {title}
      </p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          data-timeline-line
          className="absolute left-[7px] top-2 bottom-2 w-px hidden md:block"
          style={{ background: "var(--muted)", opacity: 0.25 }}
        />

        <div className="space-y-10">
          {items.map((item, i) => (
            <div key={i} data-entry className="flex gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center pt-1.5 flex-shrink-0">
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0"
                  style={{
                    borderColor: "var(--accent)",
                    background:
                      item.type === "work" ? "var(--accent)" : "var(--bg)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                className="flex-1 pb-10 border-b"
                style={{
                  borderColor: "var(--muted)",
                  opacity: 1,
                  borderOpacity: 0.1,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="font-sans font-medium"
                      style={{
                        fontSize: "1rem",
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="transition-colors duration-200 hover:text-[var(--accent)]"
                        >
                          {item.company}{" "}
                          <ArrowRight size={12} className="inline mb-0.5" />
                        </Link>
                      ) : (
                        item.company
                      )}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--accent)" }}>
                      {item.role}
                    </p>
                  </div>
                  <span
                    className="font-mono text-xs flex-shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.period}
                  </span>
                </div>

                {item.type === "project" && item.highlights && (
                  <ul className="space-y-2 mt-3">
                    {item.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--bg)" }} className="pt-28 md:pt-32">
      {/* Header */}
      <div ref={headerRef} className="px-6 md:px-16 max-w-4xl mx-auto mb-20">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--muted)" }}
        >
          Experience
        </p>
        <h1
          className="font-serif italic leading-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          Where I've been.
          <br />
          <span style={{ color: "var(--accent)" }}>What I've built.</span>
        </h1>
      </div>

      {/* Timeline content */}
      <div className="px-6 md:px-16 max-w-4xl mx-auto">
        <TimelineSection title="Work Experience" items={experience} />
        <TimelineSection title="Shipped with AI" items={aiBuilds} />
        <TimelineSection title="Technical Projects" items={technical} />
        <TimelineSection title="Education" items={education} />
      </div>

      {/* CTA */}
      <div className="px-6 md:px-16 max-w-4xl mx-auto pb-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
          style={{ color: "var(--accent)" }}
        >
          See case studies <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
