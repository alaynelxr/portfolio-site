import { Mail, Linkedin, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DARK_BG = "#1E1A14";
const CREAM = "#F2EDE4";
const CLAY = "#D87A4A";
const MUTED = "rgba(242,237,228,0.45)";
const SUBTLE = "rgba(242,237,228,0.3)";

export default function Footer() {
  return (
    <footer
      className="rounded-t-[4rem] mt-20 px-8 md:px-16 py-16"
      style={{ background: DARK_BG }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3 font-mono"
              style={{ color: MUTED }}
            >
              Email
            </p>
            <a
              href="mailto:alaynelxr@gmail.com"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: CREAM }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CLAY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
            >
              <Mail size={14} />
              alaynelxr@gmail.com
            </a>
          </div>
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3 font-mono"
              style={{ color: MUTED }}
            >
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/alayne-loo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: CREAM }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CLAY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
            >
              <Linkedin size={14} />
              alayne-loo
            </a>
          </div>
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3 font-mono"
              style={{ color: MUTED }}
            >
              Writing
            </p>
            <a
              href="https://minorturbulence.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: CREAM }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CLAY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
            >
              <BookOpen size={14} />
              Minor Turbulence
            </a>
          </div>
        </div>

        {/* Built with line */}
        <div
          className="mb-8"
          style={{ borderTop: `1px solid ${SUBTLE}`, paddingTop: "1.5rem" }}
        >
          <Link
            to="/work/portfolio-site"
            className="inline-flex items-center gap-2 text-xs font-mono transition-colors duration-200"
            style={{ color: MUTED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = CLAY)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            Curious how this site was built? · Read the case study{" "}
            <ArrowRight size={11} />
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs" style={{ color: MUTED }}>
            Alayne Loo · Product Manager · Singapore
          </p>
          <p className="text-xs font-mono" style={{ color: SUBTLE }}>
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
