export const caseStudies = [
  {
    slug: "enterprise-delivery",
    title: "Orchestrating Delivery Across Borders and Agencies",
    company: "fileAI",
    label: "Enterprise Implementation",
    subtitle:
      "> $50K+ MRR delivered across contracts · 10+ people · 5 countries",
    metrics: ["5 countries", "3 agencies"],
    tags: ["Cross-functional", "Process Design", "Stakeholder Management"],
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary: "Delivered SBF's paid POC, winning the full engagement.",
    sections: [
      {
        heading: "Context",
        body: `fileAI transforms unstructured data into structured outputs for enterprise clients. For instance, insurers use it to process claims. FMCGs use it for reconciliation. Each client has unique document types and standard operating procedures, so implementations are tailored while needing to stay scalable across the product.\n\nAs Technical PM, I owned enterprise delivery end to end, coordinating three outsourced agencies and internal teams across five countries.`,
      },
      {
        heading: "Problem",
        body: `Implementations were reactive and messy. Sales handed over requirements in vague language ("help client X improve application processing") that product couldn't act on. Critical details — like whether a client's documents could even be processed by our models — surfaced too late. \n\n Two teams sometimes built near-identical features for different clients without realising it, wasting engineering effort. This was driven by timelines sales committed without product's input.`,
      },
      {
        heading: "Approach",
        body: `I worked on two fronts: fixing the upstream handoff and restructuring how we scoped work.\n\n**Standardising the sales-to-product handoff.** I worked with my fellow PM and created a structured intake template required at specific deal stages before any work began. \n\n It captured:\n\n- The problem statement in specific terms (not solutions)\n- Sample client documents to de-risk model compatibility\n- Client-side stakeholders and integration requirements\n- Use cases with concrete examples\n- Volume expectations\n- Success criteria and accuracy thresholds\n- Timeline expectations\n- Compliance requirements\n\nI forced the reframing from solutions to problems. Sales couldn't say "improve processing" anymore. They had to articulate what was actually broken.\n\n**Preventing redundant work.** Together with the other PM, I pushed back on timelines committed without product's knowledge. For every new client, I mapped requirements against 5–7 other active engagements to find shared features that could be built once and configured per client.`,
        quote:
          "Two teams could be building nearly identical features for different clients.",
      },
      {
        heading: "Implementation: Singapore Business Federation",
        body: `For SBF's paid proof of concept, I led a team of 10+ spanning one agency and one internal team. I used the intake template to capture exact requirements, outlined an implementation plan that added to existing product features rather than conflicting with them, created a detailed scope of work with timelines, then coordinated daily execution, testing, and QA with SBF's actual documents.`,
      },
      {
        heading: "Outcome",
        body: `SBF delivered successfully, leading towards a paid full implementation. The intake template was discussed with the CRO and then adapted and adopted as the standard across all engagements. The timeline pushback led to more visibility over overlapping workstreams and less rework. Implementation planning started shifting from reactive to intentional.`,
      },
      {
        heading: "Reflection",
        body: `The hardest part was changing behaviour upstream. If I did it again, I'd push harder to get the product team more visibility into pre-sales conversations from the start. The earlier we have visibility into what's being sold, the fewer fires downstream.`,
      },
    ],
  },
  {
    slug: "ocr-accuracy",
    title: "From 75% to 90%: Translating Client Needs into ML Improvements",
    company: "fileAI",
    label: "Annotation and Model Training",
    subtitle: "Critical accuracy gap · Sales × Annotation × ML Engineering",
    metrics: ["75% → 90%", "SLA met", "Repeatable process"],
    tags: ["ML/AI", "Technical PM", "Process"],
    image:
      "https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Evaluated the right fix instead of the obvious one, and improved model performance from 75% to 90% and meeting a client SLA that was at risk.",
    sections: [
      {
        heading: "Context",
        body: `In certain use cases, fileAI uses trained OCR models optimised for ultra-specific use cases: Thai characters in a less common typeface, client-specific logos and stamps, or handwriting recognition. Accuracy at the OCR stage is critical. If extracted text is wrong, every subsequent stage works with bad data.\n\nAs Technical PM, I owned the process of translating accuracy issues into specs for the annotation team and ML engineers, including deciding whether model improvement was the right path at all.`,
      },
      {
        heading: "Problem",
        body: `A client processing Taiwan banking checks reported 75% accuracy, well below their 90% SLA. The model struggled with number strings in specific areas of the checks. Taiwan banking checks were a document type we hadn't optimised for. If we couldn't meet the SLA, the implementation would stall.\n\nThe fix wasn't straightforward. Model improvement through annotation is expensive: outsourced annotators label hundreds or thousands of pages, then ML engineers retrain the model. Before committing those resources, I needed to confirm it was the right approach.`,
      },
      {
        heading: "Approach",
        body: `**Understanding the full picture first.** I spoke with sales to understand the client's desired outcome for the entire flow, not just "extract this text properly." Sometimes accuracy issues that look like OCR problems can be addressed downstream.\n\n**Exploring cheaper fixes.** Within fileAI, users can edit field-level prompts that guide data processing. A rule like "if the name contains 'Pte Ltd', expand to Private Limited Company" takes one minute and can meaningfully improve output. In this case, the issue was at the recognition level, so field-level prompting didn't apply. But evaluating that first was important because the annotation route is a significant investment.\n\n**Proceeding with annotation.** Once I confirmed retraining was necessary, I collected sample data, scoped the labelling work with the annotation team lead, coordinated with ML engineers, and set realistic timelines back to sales.`,
        quote:
          "The instinct when accuracy drops is to push for model retraining. I didn't do that.",
      },
      {
        heading: "Implementation",
        body: `The annotation team labelled hundreds of pages of Taiwan banking checks, focusing on the number-string patterns the model failed on. I acted as the bridge between client requirements and technical specs throughout. I benchmarked the retrained model against the client's original sample documents for a direct before-and-after comparison.`,
      },
      {
        heading: "Outcome",
        body: `Accuracy improved from 75% to approximately 90%, meeting the SLA. The structured approach of evaluating workarounds before committing to annotation became a repeatable pattern for accuracy escalations.`,
      },
      {
        heading: "Reflection",
        body: `I'd push to educate sales and CS to flag accuracy concerns earlier. The annotation cycle isn't quick or cheap, and the sooner product knows about a gap, the more options we have.`,
      },
    ],
  },
  {
    slug: "built-for-shopify",
    title: "Earning the Badge That Drove 18% Trial Conversion Growth",
    company: "ReferralCandy",
    label: "Platform Certification",
    subtitle:
      "9-month effort · 18% trial conversions · PM + Design + Engineering",
    metrics: ["+18% conversions", "9 months", "First cohort"],
    tags: ["Growth", "Platform", "Cross-functional"],
    image:
      "https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Navigated Shopify's certification process to land ReferralCandy in Shopify's first Built for Shopify cohort — driving 18% growth in qualified trial conversions.",
    sections: [
      {
        heading: "Context",
        body: `ReferralCandy is a B2B referral marketing tool, primarily serving Shopify merchants. We'd been a Shopify partner for over six years.`,
      },
      {
        heading: "Problem",
        body: `Shopify introduced "Built for Shopify," a certification setting a high bar across performance, integration, design, and merchant utility. Certified apps got a search ranking boost, App Store placement, and a trust badge. For ReferralCandy, where the App Store was a primary acquisition channel, this was directly tied to growth.\n\nWe were invited to be among the first apps to attempt certification. But our app had gaps:\n\n- Web Vitals thresholds (LCP under 2.5s, CLS under 0.1, INP under 200ms)\n- Polaris design system compliance\n- Contextual save bar integration\n- Nav menu adoption\n- Mobile responsiveness\n- Clean uninstalls via theme app extensions`,
      },
      {
        heading: "Approach",
        body: `**Auditing from scattered sources.** Shopify's requirements weren't in one place. I collated a checklist from across their developer docs, partner guidelines, and forums, then mapped each requirement against our current state.\n\n**Prioritising by lead time.** I identified the longest-lead-time items first — particularly performance optimisations and complex design changes — so those could start early. I separated design work from engineering work so both streams moved in parallel.\n\n**Navigating an opaque review process.** Shopify's review was slow and feedback was vague. After each rejection, I reverse-engineered what they were looking for by cross-referencing certified apps and re-reading contradictory documentation. Different parts of their docs described different rules for the same components, so there was genuine interpretation work involved.\n\nThe effort simmered over nine months alongside the regular roadmap.`,
        quote:
          "We had two rejections. A third would trigger a three-month freeze on resubmissions. We had exactly one attempt left.",
      },
      {
        heading: "Implementation",
        body: `We optimised LCP, CLS, and INP. We reworked UI to match Polaris: admin button styles, card layouts, spacing, mobile responsiveness. We adopted the contextual save bar and nav menu components and ensured clean embedding. After each rejection, I led focused triage, shipped targeted fixes, and resubmitted. \n\n The third submission was approved.`,
      },
      {
        heading: "Outcome",
        body: `18% increase in qualified trial conversions from improved App Store placement and the trust signal. ReferralCandy was among the first cohort certified, giving us an early-mover advantage over competitors.`,
      },
      {
        heading: "Reflection",
        body: `Understand what the platform actually values beyond what they document, and front-load the longest-lead-time items so it never becomes a crisis.`,
      },
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Redesigning the Merchant Analytics Dashboard",
    company: "ReferralCandy",
    label: "Product Redesign",
    subtitle: "Commission-aligned business model · PM + Design + Engineering",
    metrics: ["5–15% revenue/merchant", "Reduced CS load"],
    tags: ["Data", "UX Research", "Analytics"],
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Rebuilt the analytics dashboard around what merchants actually needed — surfacing actionable insights that drove measurable revenue growth within three months of launch.",
    sections: [
      {
        heading: "Context",
        body: `ReferralCandy's analytics dashboard is where merchants track referral programme performance. \n\n Part of our revenue was commission-based, so improving merchants' ability to optimise their programmes directly impacted our revenue too.`,
      },
      {
        heading: "Problem",
        body: `Merchants reported the dashboard lacked actionable insights. They could see data but couldn't answer what mattered: Is my programme working? What should I change? This led to merchants leaning on CS for manual reports and underinvesting in their referral programmes. Both cost us.`,
        quote: ` Is my programme working? What should I change? `,
      },
      {
        heading: "Approach",
        body: `With a small team, we couldn't build everything at once. I structured the project into four stages:\n\n- Improve data quality\n- Enhance basic reporting\n- Personalised insights and benchmarks\n- AI-driven optimisation\n\nStages 3 and 4 informed the architecture but I deliberately prioritised stages 1 and 2 for fastest impact.\n\n**Discovery combined qualitative and quantitative signals.** I reviewed Fullstory session recordings to see where merchants got stuck, what they ignored, and what they clicked repeatedly. I combined this with CS ticket themes and direct merchant feedback to identify which metrics to surface prominently.`,
        quote:
          "The AI-driven optimisation vision would have made a better demo. But without clean data and solid reporting, it would have been built on a shaky foundation.",
      },
      {
        heading: "Implementation",
        body: `We cleaned up inconsistencies in how referral events were tracked, then redesigned the dashboard around the metrics merchants cared about most: referral revenue, purchase attribution, and advocate activity. The redesign prioritised being scannable over comprehensive. We reduced default charts and made critical metrics visible without scrolling.`,
      },
      {
        heading: "Outcome",
        body: `Merchants who actively used the revamped dashboard saw 5–15% revenue increases within three months. The range reflects segment variation: already-engaged merchants gained more from better visibility; previously disengaged merchants showed more modest improvements. CS workload decreased as merchants could self-serve.\n\nStages 3 and 4 were deprioritised as company priorities shifted, but the data infrastructure was designed to support them.`,
      },
    ],
  },
  {
    slug: "market-expansion",
    title: "3 Countries in 1 Year: Building the Launch Playbook From Scratch",
    company: "StashAway",
    label: "Market Expansion",
    subtitle: "UAE, Hong Kong, Thailand · 20+ stakeholders ",
    metrics: ["3 markets", "1 year", "0 missed launches"],
    tags: ["Expansion", "Operations", "Regulatory"],
    image:
      "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Built a market expansion playbook from scratch across three regulated financial markets in one year — each launch more robust than the last.",
    sections: [
      {
        heading: "Context",
        body: `StashAway is a digital wealth management platform. When I joined as the second PM, the company operated in Singapore and Malaysia and planned to launch in three new markets within a year:\n\n- UAE (November 2020, DIFC)\n- Hong Kong (April 2021, SFC-licensed)\n- Thailand (September 2021)\n\nI owned the marketing website and certain mobile and web app features across all three launches, coordinating with 20+ stakeholders across product, engineering, design, marketing, legal, compliance, and regional teams.`,
      },
      {
        heading: "Problem",
        body: `Three challenges compounded. The timeline was aggressive with overlapping preparations. No PM playbook existed for market launches at the company. Each market had unique regulatory and compliance requirements, with Thailand and Hong Kong requiring full localisation.`,
      },
      {
        heading: "Approach",
        body: `**Clear ownership split.** I divided responsibilities with the other PM so every workstream had one owner.\n\n**Building coordination infrastructure.** I created checklists and Gantt charts in Airtable for visibility across teams and set up recurring calls with global and regional stakeholders to surface blockers proactively.\n\n**Learning and systematising after each launch.** A near-miss during UAE — I received what I thought was the final platform agreement from legal, only to find it was a placeholder — prompted me to add legal documentation as a staged checkpoint. I planned backwards from launch dates and built in active check-ins.\n\n**Localisation.** For Thailand and Hong Kong, I worked with designers and translators to ensure Thai content was accurate and clear in a financial context, not just technically translated.`,
        quote:
          "During the UAE launch, I received what I thought was the final platform agreement from legal. It was a placeholder. I only caught it because I noticed irregularities during my own review.",
      },
      {
        heading: "Implementation",
        body: `Each launch followed an increasingly refined playbook. UAE was largely ad hoc. By Hong Kong, tracking and cadences were in place. By Thailand, the playbook was mature enough that the launch ran smoothly despite added localisation complexity. My scope spanned the marketing website, app readiness, regulatory documentation, and cross-functional coordination.`,
      },
      {
        heading: "Outcome",
        body: `All three launches delivered on schedule with no blockers from my areas. The playbook became the foundation for how StashAway approached market expansion going forward.`,
      },
      {
        heading: "Reflection",
        body: `The absence of bad news doesn't mean things are on track. With teams like legal that operate on different timelines, you need active verification, not passive trust. That principle carried into every coordination-heavy project I've done since.`,
      },
    ],
  },
  {
    slug: "portfolio-site",
    title: "Building This Site in A Day",
    company: "Personal Project",
    label: "Design & Engineering",
    subtitle: "React + Vite + Vercel· Claude Code",
    metrics: ["1 day build", "Claude Code"],
    tags: ["AI", "Frontend", "Systems Thinking"],
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Designed and built this portfolio site in one day using Claude Code and deployed on Vercel.",
    sections: [
      {
        heading: "Context",
        body: `This site is the project. I built it using Claude Code while retaining full control over the system design, content strategy, and visual direction.\n\nThe goal was a portfolio site that looks sleek, feels warm and mobile-responsive.`,
      },
      {
        heading: "Problem",
        body: `I had an old portfolio site built on Notion Site. While I didn't have to touch code or worry about deployment, the Notion site was limited in customisation and didn't look great on mobile. Also, since I've created that in 2022, AI tooling has come a long way. I wanted to find out how far I can push with a one-day build with the tools available in 2026 while refining my technical fluency, and the ability to ship.`,
      },
      {
        heading: "Approach",
        body: `I adapted a very comprehensive prompt by [Leon Lin on X](https://x.com/LexnLin/status/2024589077685629100) into markdown files. \n\n **Markdown as the operating system.** Before writing a line of code, I created four structured Markdown files: a Design System (Warmcraft palette - I like Claude so much that it's heavily inspired by their colour scheme, typography, spacing rules, component specs), a Site Structure (page-by-page layout, section hierarchy, interaction notes), an About Me (voice, bio, narrative arc), and Case Study Content.\n\nThese files became the single source of truth. Claude Code read them as instructions and generated the implementation from them\n\n**[Custom skill](https://minorturbulence.substack.com/p/building-claude-skills-for-prds-mockups) for frontend design.** I installed a frontend-design skill into Claude Code that loaded design intent and aesthetic standards directly into the model's context. This constrained generation toward editorial quality rather than generic output.\n\n**Deliberate constraint.** The workflow was: write the spec, review the output, refine in natural language. Every section had at least one revision cycle and I'd just jump into the jsx files to edit content directly if needed.`,
        quote: "Markdown files as the operating system.",
      },
      {
        heading: "Design System (excerpt)",
        type: "code",
        filename: "Design System.md",
        code: `## Palette Presets
### Preset A — "Warmcraft" (Workshop Editorial)

- **Identity:** A maker's studio meets a thoughtful design magazine.
  Signals "I build things with care" — warm, grounded, human.
- **Palette (Light):** Parchment \`#FFFBF5\` (Background),
  Espresso \`#2C2418\` (Text/Dark), Terracotta \`#C4622A\` (Primary Accent),
  Fern \`#2B7A5F\` (Secondary Accent), Stone \`#6B5F4E\` (Muted/Borders)
- **Palette (Dark):** Umber \`#1E1A14\` (Background),
  Cream \`#F2EDE4\` (Text/Light), Clay \`#D87A4A\` (Primary Accent),
  Sage \`#3DAE82\` (Secondary Accent), Driftwood \`#8C8070\` (Muted/Borders)
- **Typography:** Headings: "DM Sans" Medium (tight tracking, -0.02em).
  Drama: "Lora" Italic. Data: \`"Source Code Pro"\`.
- **Hero line pattern:** "[Action noun] is the" (Bold Sans) /
  "[Human word]." (Massive Serif Italic)

---

## Fixed Design System (NEVER CHANGE)

### Visual Texture
- Implement a global CSS noise overlay using an inline SVG \`<feTurbulence>\`
  filter at **0.05 opacity** to eliminate flat digital gradients.
- Use \`rounded-[2rem]\` to \`rounded-[3rem]\` radius on all containers.
  No sharp corners anywhere.

### Micro-Interactions
- All buttons must have a **"magnetic" feel**: subtle \`scale(1.03)\` on hover
  with \`cubic-bezier(0.25, 0.46, 0.45, 0.94)\`.
- Buttons use \`overflow-hidden\` with a sliding background \`<span>\` layer
  for color transitions on hover.

### Animation Lifecycle
- Use \`gsap.context()\` within \`useEffect\` for ALL animations.
  Return \`ctx.revert()\` in the cleanup function.
- Default easing: \`power3.out\` for entrances, \`power2.inOut\` for morphs.
- Stagger value: \`0.08\` for text, \`0.15\` for cards/containers.`,
      },
      {
        heading: "Implementation",
        body: `The stack is React 19 + Vite, Tailwind CSS v3, and GSAP 3 with ScrollTrigger. Vite was the obvious choice for a frontend-only site — fast dev server, zero backend complexity, and no config overhead. For deployment, Vercel was a natural fit: free tier, I already had other projects running on it, and the setup from GitHub to live URL takes minutes.\n\nSeveral bugs surfaced during build that required diagnosis: CSS variable scoping failures on dark surfaces, a GSAP animation conflict caused by CSS default opacity competing with a from-tween, Tailwind's arbitrary value opacity modifier not working with CSS variables, and a staircase card misalignment caused by staggered y-offsets. Each was isolated, diagnosed, and fixed.\n\nDeployed to Vercel via GitHub with a custom SPA routing rewrite to support React Router's client-side navigation.`,
      },
      {
        heading: "Outcome",
        body: `A fully custom portfolio site, live in one day, built without a designer or a frontend engineer. The workflow proved that structured Markdown specs are a scalable way (and usable for other projects) for generating production-quality UI with an AI agent.`,
      },
      {
        heading: "Reflection",
        body: `The investment is in the specs. The more precisely I wrote the Markdown files — naming exact colours, describing interaction behaviour, defining tone at the sentence level — the less rework the output needed.`,
        quote: `Garbage in, garbage out applies here exactly as it does in product requirements.`,
      },
    ],
  },
  {
    slug: "splitpot",
    title:
      "SplitPot: Building a Zero-Backend Receipt Splitter for Shared Meals",
    company: "Personal Project",
    label: "Product & Engineering",
    subtitle:
      "Next.js 15 · Tesseract OCR · Zero API costs · Built with Claude Code",
    metrics: ["£0 running cost", "0 backend", "Singapore-native OCR"],
    tags: ["Product Design", "Frontend", "AI Tools"],
    image:
      "https://images.pexels.com/photos/19775602/pexels-photo-19775602.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/19775602/pexels-photo-19775602.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary: "A zero-backend web app for splitting shared restaurant bills.",
    sections: [
      {
        heading: "Context",
        body: `SplitPot is a web app I built to solve a personal recurring problem: the friction of splitting a shared restaurant bill when some dishes were communal, some were shared among certain people and others were individual. \n\n Think drinks, desserts or more specifically the scenario that inspired the app: the sauce bar at a hotpot restaurant. \n\n The additonal complexity of GST, a service charge, and sometimes a discount voucher on top makes the split more annoying to calculate. The existing tools I've found all required an app install or at least an account sign up which is sufficient friction for some. \n\nI built SplitPot with Claude Design (released recently on 17 Apr 2026) and Claude Code tooling and deployed it to Vercel at zero ongoing cost. \n\n Try it at [splitpot.vercel.app.](https://splitpot.vercel.app/)`,
      },
      {
        heading: "Problem",
        body: `The specific pain I was solving for:\n\n- Existing bill-splitters require guests to sign up or install an app. \n-\n- The whole flow needs to work on seamlessly on a phone, with easy assignment of items to diners.`,
      },
      {
        heading: "Key Product Decisions",
        body: `**No app install.** One person uses the web app to tally up the bill. No accounts, no sign-up, no friction at the point of sharing. This sounds obvious, but it meaningfully shaped everything downstream: all state lives in memory, all computation is client-side.\n\n**Client-side OCR ** Once the app loads, scanning makes zero server round-trips. Tesseract.js runs entirely in the browser; receipt data is never uploaded anywhere. Language data is bundled from /public so there's no CDN dependency during the scan step either.\n\n**Singapore receipts natively.** The parser auto-detects and separates GST (9%) and service charge (10%) lines from food items, and back-calculates percentages when a receipt only shows the raw charge amount rather than the rate.`,
      },
      {
        heading: "Technical Implementation",
        body: `**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Zustand for state, Tesseract.js for OCR — deployed to Vercel Hobby (free tier).\n\n**OCR pipeline (fully client-side):** Images are compressed before recognition. The receipt parser applies layered heuristics to handle real-world OCR noise: price matching handles dropped decimal points (2099 → $20.99), a bilingual lookahead promotes English item names from below Chinese-script lines, and keyword blocklists strip totals, addresses, and metadata before any item reaches the UI.\n\n**State management:** A single Zustand store holds the full session — participants, scanned line items, extras, and computed splits. An empty assignedTo: [] array is a semantic shorthand for "split between everyone," avoiding the need to eagerly expand all-participant lists on every item.\n\n**App flow:** Capture → /processing (OCR) → /group (name participants) → /items (review + assign dishes) → /extras (tax/discount) → /summary (per-person totals).`,
      },
      {
        heading: "Trade-offs",
        body: `**Tesseract.js over an LLM vision layer.** The most deliberate cost/quality trade-off. Tesseract is free at any scale: zero API costs, works offline, no privacy concerns with receipt data leaving the device. The downside is accuracy on messy receipts — smudged text, curved paper, and bilingual layouts produce garbled output that GPT-4o Vision would handle far more robustly.\n\nThe gap is mitigated with a manual correction UI: users can edit any item before calculating. At the scale of a personal side project with no monetisation, Tesseract is the right call. Adding an LLM layer would cost money proportional to usage and introduce an API dependency that defeats the point of zero-cost hosting.\n\n**Client-only architecture.** No server, no database, no auth. Session state lives in memory and resets on close. Deployment is trivially simple and ongoing cost is zero, but there's no history, no saved sessions, and no cross-device sync — which is fine. The use case is single-session: one meal, one split, done.`,
        quote:
          "At zero cost and zero ongoing fee, I can share this with anyone. An LLM layer makes that harder to justify.",
      },
      {
        heading: "Reflection",
        body: `The product decisions and the technical decisions turned out to be the same decisions. Choosing no server made the "no install for guests" promise possible. While I'm not entirely ruling out exploring an LLM layer to improve accuracy yet, choosing Tesseract ensured a mostly reliable POC that does not hurt my wallet.\n\nBuilding with Claude Code and Claude Design meant the initial creation was fast. But the interesting work was still the core PM thought process: figuring out what the app actually needed to do, and being precise about the edge cases (bilingual receipts, dropped decimals, service charge back-calculation) before expecting the tools to handle them.\n\n**Known limitations.**\n\nThe rounding logic is mathematically correct at the group level, but produces a 1–2 cent asymmetry between individuals. When two people share the exact same items, one may end up owing $0.01 more than the other. This is because integer floor division distributes remainders sequentially, not symmetrically. The total is always right; the individual split is fair in aggregate but not perfectly equal by person.\n\nTesseract OCR is also noticeably weaker than what today's vision models can do. It performs reasonably well on e-receipts and clean photographs with good lighting and flat paper, but degrades quickly on physical receipts with smudged ink, curved paper, or small fonts. Bilingual layouts add further noise. In practice, most users will need to correct a few line items manually.\n\n**Next iteration.**\n\n- Swap Tesseract for an optional LLM vision call to meaningfully improve OCR quality \n- Surface the 1-cent remainder allocation visibly in the summary so users understand why two people who shared the same dishes owe fractionally different amounts\n- Session export to a shareable URL for quick post-meal reference\n\n[Try SplitPot](https://splitpot.vercel.app/)`,
      },
    ],
  },
  {
    slug: "ai-pm-toolkit",
    title: "Building Custom AI Skills That Save 10+ Hours Per Week",
    company: "Personal Project",
    label: "AI Tooling",
    subtitle: "Claude Code + MCP + 4 custom skills · Published on Substack",
    metrics: ["10+ hrs/week saved", "4 custom skills", "Published series"],
    tags: ["AI", "Automation", "Developer Tools"],
    image:
      "https://images.pexels.com/photos/30869149/pexels-photo-30869149.jpeg?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.pexels.com/photos/30869149/pexels-photo-30869149.jpeg?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Built a system of AI-powered tools that automate repetitive PM workflows — saving 10+ hours per week and publishing the full process publicly on Substack.",
    sections: [
      {
        heading: "Context",
        body: `I built a system of AI-powered tools to automate repetitive PM workflows and write my learnings on Substack, [Minor Turbulence](https://minorturbulence.substack.com/), in a series called "Tech for PMs (Simplified)."\n\nThe system uses Claude Code connected to JIRA, Figma, and Confluence via MCP (Model Context Protocol), with custom slash-command skills that turn PRDs into mockups, JIRA tickets, and knowledge articles.`,
      },
      {
        heading: "Problem",
        body: `PM work involves a lot of repetitive, structured tasks that collectively eat hours per week. Writing JIRA tickets from a PRD: copy summary, set issue type, link epic, format description, repeat. Creating mockups: jump to a prototyping tool that knows nothing about my product's design system, screenshot results back into docs. Writing knowledge articles: manually reconcile an outdated PRD with what actually shipped.\n\nEach tool sat in its own silo with no shared context.`,
      },
      {
        heading: "Approach",
        body: `**Layered context via CLAUDE.md files.** A global file with my working style and preferences, plus project-level files with feature overviews and stakeholders. Claude Code reads all of them hierarchically, so context compounds without repetition.\n\n**Predictable folder structure.** Each project gets a consistent layout (PRD, screenshots, mockups, research) so skills always know where to read from and save to.\n\n**Four custom skills:**\n\n- **/mockup**: Generates HTML prototypes using Figma design tokens via MCP. Two fidelity modes. The side-by-side comparison view became my go-to for alignment conversations.\n- **/create-jira-tickets**: Reads a PRD and creates tickets directly in JIRA under the correct epic in Given/When/Then format. A 20-minute task became one command.\n- **/knowledge-article**: Synthesises the PRD (intent), JIRA tickets (what shipped), and screenshots into a Confluence article. Reconciles the gap between plan and reality.\n- **/verbal-dump**: Converts voice dictation into structured documentation.`,
        quote:
          "Most PM deliverables follow predictable patterns. They just need the right context at the right time.",
      },
      {
        heading: "Knowledge Article Skill (excerpt)",
        type: "code",
        filename: "KnowledgeSkill.md",
        code: `---
name: knowledge-article
description: Create internal knowledge articles from Jira tickets, PRDs,
  and screenshots. Publishes to Confluence or generates Markdown.
argument-hint: "[source-file]"
allowed-tools:
  - mcp__atlassian__getJiraIssue
  - mcp__atlassian__searchJiraIssuesUsingJql
  - mcp__atlassian__getConfluenceSpaces
  - mcp__atlassian__createConfluencePage
  - Glob
  - Read
  - Write
  - AskUserQuestion
---

## Knowledge Article Generator

Generate internal-facing knowledge articles for cross-team sharing.

### Inputs

**Required:**
- Source material: \`$0\` (first argument) or referenced with @file
  - Jira ticket links and/or PRD documents
  - If the Jira ticket is an Epic, also use its child tickets.

**Optional:**
- Screenshots of the UI
- Figma links
- Additional context documents

### Before Generating

Ask the user:
1. **Article type**: Brief or Detailed?
   - **Detailed** (default): Full context with all sections
   - **Brief**: Condensed overview, minimal background
2. **Publish to Confluence?**
   - Yes: Create directly in Confluence (Product Enablement folder)
   - No: Generate Markdown file locally

### Document Structure (Detailed)

\`\`\`
ℹ️ [Feature Name]

## Overview
[2-3 sentence summary of what this feature/change does and why it matters]

## Background
[Context on why this was built, problem being solved]

## Feature / Capabilities
[What the feature does from a user perspective]
[Include screenshots with captions]

## Related Links
- Jira: [Linked tickets]
- PRD: [Link if available]
- Figma: [Design link if available]

## FAQs
| Question         | Answer |
|------------------|--------|
| [Question 1]     | [Answer] |
\`\`\`

### Confluence Publishing

**Space:** BS2 · **Parent folder:** Product Enablement · **Folder ID:** 957644835`,
      },
      {
        heading: "Implementation",
        body: `Initial setup took an evening. Each skill went through multiple refinement rounds. The mockup skill evolved from a basic HTML generator to include fidelity modes and comparison views as I learned what I actually needed for stakeholder conversations. The design principle throughout: good enough to use immediately beats perfect but slow.`,
      },
      {
        heading: "Outcome",
        body: `10+ hours saved per week. JIRA ticket quality improved through consistent formatting. Knowledge articles now reflect what shipped, not just what was planned. The full process is published as a multi-part Substack series.`,
      },
      {
        heading: "Reflection",
        body: `The compound effect of layered context matters more than any individual skill. The skills got better not because I improved the prompts, but because I improved the context they operated within. The system is still fragile to MCP availability changes and the initial setup cost is real, but the payoff compounds.\n\n[Read the full article here](https://minorturbulence.substack.com/p/building-claude-skills-for-prds-mockups)`,
      },
    ],
  },
];
