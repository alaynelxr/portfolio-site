export const caseStudies = [
  {
    slug: "enterprise-delivery",
    title: "Orchestrating Delivery Across Borders and Agencies",
    company: "fileAI",
    label: "Enterprise Implementation",
    subtitle:
      "$50K+ MRR delivered · 10+ people · 5 countries · 1–2 month cycles",
    metrics: ["Over $50K+ MRR", "5 countries", "3 agencies"],
    tags: ["Cross-functional", "Process Design", "Stakeholder Management"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Introduced structured intake templates to reduce redundant work. Delivered SBF's paid POC, winning the full engagement.",
    sections: [
      {
        heading: "Context",
        body: `fileAI transforms unstructured data into structured outputs for enterprise clients. Insurers use it to process claims. Logistics companies use it for invoice reconciliation. Each client has unique document types and standard operating procedures, so implementations are tailored while needing to stay scalable across the product.\n\nAs Technical PM, I owned enterprise delivery end to end, coordinating three outsourced agencies and internal teams across five countries.`,
      },
      {
        heading: "Problem",
        body: `When I stepped in, implementations were reactive and messy. Sales handed over requirements in vague language ("help client X improve application processing") that product couldn't act on. Critical details — like whether a client's documents could even be processed by our models — surfaced too late. Two teams sometimes built near-identical features for different clients without realising it, wasting engineering effort. This was driven by timelines sales committed without product's input.`,
      },
      {
        heading: "Approach",
        body: `I worked on two fronts: fixing the upstream handoff and restructuring how we scoped work.\n\n**Standardising the sales-to-product handoff.** I created a structured intake template required at specific deal stages before any work began. It captured: the problem statement in specific terms (not solutions), sample client documents to de-risk model compatibility, client-side stakeholders, integration requirements, use cases with concrete examples, volume expectations, success criteria and accuracy thresholds, timeline expectations, and compliance requirements.\n\nI forced the reframing from solutions to problems. Sales couldn't say "improve processing" anymore. They had to articulate what was actually broken.\n\n**Preventing redundant work.** Together with the other PM, I pushed back on timelines committed without product's knowledge. For every new client, I mapped requirements against 5–7 other active engagements to find shared features that could be built once and configured per client.`,
        quote:
          "Two teams could be building nearly identical features for different clients. The waste wasn't just effort; it was opportunity cost.",
      },
      {
        heading: "Implementation: Singapore Business Federation",
        body: `For SBF's paid proof of concept, I led a team of 10+ spanning one agency and one internal team. I used the intake template to capture exact requirements, outlined an implementation plan that added to existing product features rather than conflicting with them, created a detailed scope of work with timelines, then coordinated daily execution, testing, and QA with SBF's actual documents.`,
      },
      {
        heading: "Outcome",
        body: `SBF delivered successfully, leading towards a paid full implementation. The intake template got adopted as the standard across all engagements. The timeline pushback led to more visibility over overlapping workstreams and less rework. Implementation planning started shifting from reactive to intentional, building what scales across the next 5–7 clients.`,
      },
      {
        heading: "Reflection",
        body: `The hardest part was changing behaviour upstream. If I did it again, I'd push harder to get the product team more visibility into pre-sales conversations from the start. The earlier we have visibility into what's being sold, the fewer fire drills downstream.`,
      },
    ],
  },
  {
    slug: "ocr-accuracy",
    title: "From 75% to 90%: Translating Client Needs into ML Improvements",
    company: "fileAI",
    label: "ML Accuracy",
    subtitle: "SLA-critical accuracy gap · Sales × Annotation × ML Engineering",
    metrics: ["75% → 90%", "SLA met", "Repeatable process"],
    tags: ["ML/AI", "Technical PM", "Process"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Evaluated the right fix instead of the obvious one, and improved model performance from 75% to 90% and meeting a client SLA that was at risk.",
    sections: [
      {
        heading: "Context",
        body: `fileAI uses trained OCR models optimised for specific use cases: Thai characters, client-specific logos and stamps, or handwriting recognition. Accuracy at the OCR stage is critical. If extracted text is wrong, every subsequent stage works with bad data.\n\nAs Technical PM, I owned the process of translating accuracy issues into specs for the annotation team and ML engineers, including deciding whether model improvement was the right path at all.`,
      },
      {
        heading: "Problem",
        body: `A client processing Taiwan banking checks reported 75% accuracy, well below their 90% SLA. The model struggled with number strings in specific areas of the checks — a document type we hadn't optimised for. If we couldn't meet the SLA, the implementation would stall.\n\nThe fix wasn't straightforward. Model improvement through annotation is expensive: outsourced annotators label hundreds or thousands of pages, then ML engineers retrain the model. Before committing those resources, I needed to confirm it was the right approach.`,
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Navigated Shopify's certification process to land ReferralCandy in Shopify's first Built for Shopify cohort — driving 18% growth in qualified trial conversions.",
    sections: [
      {
        heading: "Context",
        body: `ReferralCandy is a B2B referral marketing tool, primarily serving Shopify merchants. We'd been a Shopify partner for over six years.`,
      },
      {
        heading: "Problem",
        body: `Shopify introduced "Built for Shopify," a certification setting a high bar across performance, integration, design, and merchant utility. Certified apps got a search ranking boost, App Store placement, and a trust badge. For ReferralCandy, where the App Store was a primary acquisition channel, this was directly tied to growth.\n\nWe were invited to be among the first apps to attempt certification. But our app had gaps: Web Vitals thresholds (LCP under 2.5s, CLS under 0.1, INP under 200ms), Polaris design system compliance, contextual save bar integration, nav menu adoption, mobile responsiveness, and clean uninstalls via theme app extensions.`,
      },
      {
        heading: "Approach",
        body: `**Auditing from scattered sources.** Shopify's requirements weren't in one place. I collated a checklist from across their developer docs, partner guidelines, and forums, then mapped each requirement against our current state.\n\n**Prioritising by lead time.** I identified the longest-lead-time items first — particularly performance optimisations and complex design changes — so those could start early. I separated design work from engineering work so both streams moved in parallel.\n\n**Navigating an opaque review process.** Shopify's review was slow and feedback was vague. After each rejection, I reverse-engineered what they were looking for by cross-referencing certified apps and re-reading contradictory documentation. Different parts of their docs described different rules for the same components, so there was genuine interpretation work involved.\n\nThe effort simmered over nine months alongside the regular roadmap.`,
        quote:
          "We had two rejections. A third would trigger a three-month freeze on resubmissions. We had exactly one attempt left.",
      },
      {
        heading: "Implementation",
        body: `We optimised LCP, CLS, and INP. We reworked UI to match Polaris: admin button styles, card layouts, spacing, mobile responsiveness. We adopted the contextual save bar and nav menu components and ensured clean embedding. After each rejection, I led focused triage, shipped targeted fixes, and resubmitted. The third submission was approved.`,
      },
      {
        heading: "Outcome",
        body: `18% increase in qualified trial conversions from improved App Store placement and the trust signal. ReferralCandy was among the first cohort certified, giving us an early-mover advantage over competitors.`,
      },
      {
        heading: "Reflection",
        body: `Treat platform certification like a product negotiation, not a compliance checklist. Understand what the platform actually values beyond what they document, and front-load the longest-lead-time items so it never becomes a crisis.`,
      },
    ],
  },
  {
    slug: "analytics-dashboard",
    title:
      "Redesigning the Dashboard That Drove 5–15% Revenue Growth Per Merchant",
    company: "ReferralCandy",
    label: "Product Redesign",
    subtitle: "Commission-aligned business model · PM + Design + Engineering",
    metrics: [
      "5–15% revenue/merchant",
      "Reduced CS load",
      "Staged architecture",
    ],
    tags: ["Data", "UX Research", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Rebuilt the analytics dashboard around what merchants actually needed — surfacing actionable insights that drove measurable revenue growth within three months of launch.",
    sections: [
      {
        heading: "Context",
        body: `ReferralCandy's analytics dashboard is where merchants track referral programme performance. Part of our revenue was commission-based, so improving merchants' ability to optimise their programmes directly impacted our revenue too.`,
      },
      {
        heading: "Problem",
        body: `Merchants reported the dashboard lacked actionable insights. They could see data but couldn't answer what mattered: Is my programme working? What should I change? This led to merchants leaning on CS for manual reports and underinvesting in their referral programmes. Both cost us.`,
      },
      {
        heading: "Approach",
        body: `With a small team, we couldn't build everything at once. I structured the project into four stages: (1) improve data quality, (2) enhance basic reporting, (3) personalised insights and benchmarks, (4) AI-driven optimisation. Stages 3 and 4 informed the architecture but I deliberately prioritised stages 1 and 2 for fastest impact.\n\n**Discovery combined qualitative and quantitative signals.** I reviewed Fullstory session recordings to see where merchants got stuck, what they ignored, and what they clicked repeatedly. I combined this with CS ticket themes and direct merchant feedback to identify which metrics to surface prominently.`,
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
      {
        heading: "Reflection",
        body: `If I did it again, I'd quantify the CS workload reduction with hard numbers. We knew support tickets dropped, but a concrete figure would have made the ROI case to leadership stronger and potentially kept later stages alive on the roadmap.`,
      },
    ],
  },
  {
    slug: "market-expansion",
    title: "3 Countries in 1 Year: Building the Launch Playbook From Scratch",
    company: "StashAway",
    label: "Market Expansion",
    subtitle:
      "UAE, Hong Kong, Thailand · 20+ stakeholders · Regulated financial markets",
    metrics: ["3 markets", "1 year", "0 missed launches"],
    tags: ["Expansion", "Operations", "Regulatory"],
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Built a market expansion playbook from scratch across three regulated financial markets in one year — each launch more robust than the last.",
    sections: [
      {
        heading: "Context",
        body: `StashAway is a digital wealth management platform. When I joined as the second PM, the company operated in Singapore and Malaysia and planned to launch in three new markets within a year: UAE (November 2020, DIFC), Hong Kong (April 2021, SFC-licensed), and Thailand (September 2021).\n\nI owned the marketing website and key mobile and web app features across all three launches, coordinating with 20+ stakeholders across product, engineering, design, marketing, legal, compliance, and regional teams.`,
      },
      {
        heading: "Problem",
        body: `Three challenges compounded. The timeline was aggressive with overlapping preparations. No playbook existed for market launches at the company. Each market had unique regulatory and compliance requirements, with Thailand requiring full localisation into Thai.`,
      },
      {
        heading: "Approach",
        body: `**Clear ownership split.** I divided responsibilities with the other PM so every workstream had one owner.\n\n**Building coordination infrastructure.** I created checklists and Gantt charts in Airtable for visibility across teams and set up recurring calls with global and regional stakeholders to surface blockers proactively.\n\n**Learning and systematising after each launch.** A near-miss during UAE — I received what I thought was the final platform agreement from legal, only to find it was a placeholder — prompted me to add legal documentation as a staged checkpoint. I planned backwards from launch dates and built in active check-ins rather than assuming delivery would happen on time.\n\n**Localisation.** For Thailand, I worked with designers and translators to ensure Thai content was accurate and clear in a financial context, not just technically translated.`,
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
    slug: "ai-pm-toolkit",
    title: "Building Custom AI Skills That Save 10+ Hours Per Week",
    company: "Personal Project",
    label: "AI Tooling",
    subtitle: "Claude Code + MCP + 4 custom skills · Published on Substack",
    metrics: ["10+ hrs/week saved", "4 custom skills", "Published series"],
    tags: ["AI", "Automation", "Developer Tools"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Built a system of AI-powered tools that automate repetitive PM workflows — saving 10+ hours per week and publishing the full process publicly on Substack.",
    sections: [
      {
        heading: "Context",
        body: `Alongside my day job, I built a system of AI-powered tools to automate repetitive PM workflows. I write about it publicly on my Substack, Minor Turbulence, in a series called "Tech for PMs (Simplified)."\n\nThe system uses Claude Code connected to JIRA, Figma, and Confluence via MCP (Model Context Protocol), with custom slash-command skills that turn PRDs into mockups, JIRA tickets, and knowledge articles.`,
      },
      {
        heading: "Problem",
        body: `PM work involves a lot of repetitive, structured tasks that collectively eat hours per week. Writing JIRA tickets from a PRD: copy summary, set issue type, link epic, format description, repeat. Creating mockups: jump to a prototyping tool that knows nothing about my product's design system, screenshot results back into docs. Writing knowledge articles: manually reconcile an outdated PRD with what actually shipped.\n\nEach tool sat in its own silo with no shared context.`,
      },
      {
        heading: "Approach",
        body: `**Layered context via CLAUDE.md files.** A global file with my working style and preferences, plus project-level files with feature overviews and stakeholders. Claude Code reads all of them hierarchically, so context compounds without repetition.\n\n**Predictable folder structure.** Each project gets a consistent layout (PRD, screenshots, mockups, research) so skills always know where to read from and save to.\n\n**Four custom skills:**\n- **/mockup**: Generates HTML prototypes using Figma design tokens via MCP. Two fidelity modes. The side-by-side comparison view became my go-to for alignment conversations.\n- **/create-jira-tickets**: Reads a PRD and creates tickets directly in JIRA under the correct epic in Given/When/Then format. A 20-minute task became one command.\n- **/knowledge-article**: Synthesises the PRD (intent), JIRA tickets (what shipped), and screenshots into a Confluence article. Reconciles the gap between plan and reality.\n- **/verbal-dump**: Converts voice dictation into structured documentation.`,
        quote:
          "Most PM deliverables follow predictable patterns. They just need the right context at the right time.",
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
        body: `The compound effect of layered context matters more than any individual skill. The skills got better not because I improved the prompts, but because I improved the context they operated within. The system is still fragile to MCP availability changes and the initial setup cost is real, but the payoff compounds.`,
      },
    ],
  },
];
