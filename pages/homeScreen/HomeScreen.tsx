import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Cpu,
  Layers,
  PlayCircle,
  Smartphone,
  Zap,
} from "react-feather";

const strengths = [
  {
    title: "Product-quality frontend",
    description:
      "Clean, responsive interfaces in React and Next.js with careful spacing, hierarchy, and polished execution.",
    icon: Layers,
  },
  {
    title: "Mobile apps that feel native",
    description:
      "React Native builds with smooth flows, reliable state management, and attention to interaction details.",
    icon: Smartphone,
  },
  {
    title: "Backend-connected features",
    description:
      "REST APIs, payments, real-time updates, and the integrations needed to move a product from concept to production.",
    icon: Zap,
  },
  {
    title: "AI automation & implementation",
    description:
      "AI-powered workflows, n8n automations, API integrations, and practical implementations that save teams time and unlock new product capability.",
    icon: Cpu,
  },
];

const capabilities = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Laravel",
  "Tailwind CSS",
  "Redux / MobX / SWR",
  "Stripe & payments",
  "WebSockets",
  "Zoom SDK",
  "REST APIs",
  "Pixel-perfect UI",
  "AI implementation",
  "n8n automation",
  "Workflow automation",
  "OpenAI integrations",
  "AI agents",
];

const aiServices = [
  "Design and build n8n workflows for lead routing, content ops, CRM sync, and internal operations.",
  "Implement AI features inside products, from chat and assistants to summarization, extraction, and automation.",
  "Connect APIs, databases, webhooks, and business tools into reliable AI-powered workflows that teams actually use.",
];

const availabilityModes = ["Remote", "Contract", "Full-time"];

const mobileShowcaseVideos = [
  {
    title: "Echo",
    description: "Mobile-first product flow with polished interactions.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/echo.mp4",
  },
  {
    title: "Quip V2",
    description: "Refined mobile UX focused on clarity and visual rhythm.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/quip-v2.mp4",
  },
  {
    title: "Emmaus",
    description: "Smooth user flows designed for real usage and easy navigation.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/emmaus.mp4",
  },
  {
    title: "Quip TGSM",
    description: "Mobile interface work with strong product presentation.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/quip%20tgsm.mp4",
  },
  {
    title: "CoParenting Plus",
    description: "Feature-rich mobile product with production-focused execution.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/coparentingplus.mp4",
  },
  {
    title: "Covered Press",
    description: "App experience built around content workflows and usability.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/coveredpress.mp4",
  },
  {
    title: "Sales",
    description: "Mobile workflow demo that shows speed, structure, and polish.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/sales.mp4",
  },
];

const productWalkthroughVideos = [
  {
    title: "Chptr",
    description: "Large-screen product walkthrough focused on feature depth.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/bg-2.mov",
  },
  {
    title: "Autarc",
    description: "Demonstration of product flow, navigation, and interface logic.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/bg-1.mov",
  },
  {
    title: "CoveredPress",
    description: "Web product demo showing real workflow design in action.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/bg-3.mp4",
  },
  {
    title: "Grihabhumi",
    description: "Marketplace-style product walkthrough with practical UX patterns.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/grihabhumi.mp4",
  },
  {
    title: "GodawariMart",
    description: "Commerce-focused product experience with operational flows.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/bg-gd-example.mp4",
  },
  {
    title: "Brighter Future",
    description: "Project showcase highlighting complete user journey thinking.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/brighter.mp4",
  },
  {
    title: "Sales Force Automation",
    description: "Business workflow tooling built for day-to-day productivity.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/sfa.mp4",
  },
  {
    title: "Nyboss Job Portal",
    description: "Recruitment-focused product flow with structured information design.",
    src: "https://xb02uorssndl6vzc.public.blob.vercel-storage.com/nyboss.mp4",
  },
];

const hiringPoints = [
  "I care about shipping work that looks polished, performs well, and is easy for teams to maintain.",
  "I can move across web, mobile, and backend-connected product work without losing attention to detail.",
  "I can also help teams add AI in practical ways, from internal automations to customer-facing AI features.",
  "I bring a builder mindset: understand the goal, reduce friction, and turn ideas into usable software quickly.",
];

const HomeScreen = () => {
  return (
    <main className="portfolio-shell overflow-hidden">
      <section className="portfolio-section relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="portfolio-orb portfolio-orb-left" />
        <div className="portfolio-orb portfolio-orb-right" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-[1]">
            <div className="section-kicker gap-3">
              <span className="status-dot" />
              Available for product engineering and AI automation work
            </div>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.9rem,11vw,3.8rem)] font-[Sora-Bold] leading-[0.98] tracking-[-0.05em] text-slate-950">
              Building digital products and AI workflows ready for production.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I&apos;m Anis Hamal, a web and mobile developer who also builds AI
              implementations and n8n automations. I focus on thoughtful UI,
              production-ready code, and practical systems that companies can
              trust to ship and scale.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hamalanis1@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Let&apos;s talk
                <ArrowRight size={16} />
              </a>
              <a
                href="#project-images"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
              >
                View selected work
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {availabilityModes.map((mode) => (
                <span key={mode} className="pill-chip pill-chip-muted">
                  {mode}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass-panel rounded-[28px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Primary focus
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  Frontend quality with product thinking
                </p>
              </div>
              <div className="glass-panel rounded-[28px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Stack
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  React, Next.js, React Native, Laravel, AI workflows
                </p>
              </div>
              <div className="glass-panel rounded-[28px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Delivery style
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  Clear UI, reliable integrations, automation-minded delivery
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-[1]">
            <div className="hero-visual rounded-[36px] p-4 shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white">
                <img
                  src="/img/working.jpg"
                  alt="Illustration of Anis Hamal building software"
                  className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[520px]"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-950 px-4 py-4 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                    What I build
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Web apps, mobile apps, AI workflows, and polished product interfaces
                  </p>
                </div>
                <div className="rounded-[24px] bg-white px-4 py-4 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Typical features
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Payments, dashboards, API-driven workflows, and AI-powered automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="about-me">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <p className="section-kicker section-kicker-dark">Why teams hire me</p>
            <h2 className="mt-5 max-w-md text-4xl font-[Sora-Bold] leading-tight tracking-[-0.04em]">
              I turn ideas into experiences people enjoy using.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I care about the full impression a product leaves: the clarity
              of the interface, the confidence of the interactions, and the
              reliability of the code underneath it.
            </p>
          </div>

          <div className="grid gap-4">
            {hiringPoints.map((point) => (
              <div
                key={point}
                className="glass-panel flex items-start gap-4 rounded-[28px] p-6"
              >
                <CheckCircle className="mt-1 shrink-0 text-rose-500" size={20} />
                <p className="text-lg leading-8 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="proficiency">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Core strengths</p>
            <h2 className="mt-5 text-4xl font-[Sora-Bold] leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              The blend of skills I bring to a product team
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {strengths.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="glass-panel rounded-[30px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-2xl font-[Sora-Bold] tracking-[-0.03em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-0">
                  Tools and technologies
                </p>
                <p className="text-lg font-semibold text-slate-900 mb-0">
                  Built around modern frontend, mobile, and API-connected
                  product development
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span key={capability} className="pill-chip">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[36px] bg-[linear-gradient(145deg,#111827_0%,#1f2937_55%,#0f766e_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10">
            <p className="section-kicker section-kicker-dark">AI implementation</p>
            <h2 className="mt-5 max-w-xl text-4xl font-[Sora-Bold] leading-tight tracking-[-0.04em] sm:text-5xl">
              Strong with AI automation, n8n workflows, and practical AI features.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/90">
              I don&apos;t just build interfaces. I can also help teams connect
              AI into real workflows, automate repetitive operations, and turn
              good ideas into production-ready implementations.
            </p>
          </div>

          <div className="grid gap-4">
            {aiServices.map((service) => (
              <div
                key={service}
                className="glass-panel flex items-start gap-4 rounded-[28px] p-6"
              >
                <Cpu className="mt-1 shrink-0 text-emerald-600" size={20} />
                <p className="text-lg leading-8 text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="project-images">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Selected work</p>
              <h2 className="mt-5 text-4xl font-[Sora-Bold] leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Real product videos that show how my work actually feels
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Instead of static screenshots, this section highlights actual
              product demos so companies can judge the quality, structure, and
              polish of the experiences I build.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Smartphone size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-0">
                  Mobile app reels
                </p>
                <p className="text-base font-semibold leading-7 text-slate-900 sm:text-lg mb-0">
                  Vertical demos that showcase app flow, polish, and interaction quality
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {mobileShowcaseVideos.map((project) => (
                <article
                  key={project.title}
                  className="project-frame overflow-hidden rounded-[32px]"
                >
                  <div className="bg-[linear-gradient(180deg,#111827_0%,#1f2937_100%)] p-4">
                    <div className="mx-auto max-w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                      <video
                        className="mobile-showcase-video w-full object-cover"
                        playsInline
                        preload="metadata"
                        controls
                        muted
                        loop
                      >
                        <source src={project.src} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                      <PlayCircle size={16} />
                      Mobile product demo
                    </div>
                    <h3 className="mt-4 text-[1.45rem] font-[Sora-Bold] tracking-[-0.03em] text-slate-950 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {productWalkthroughVideos.map((project) => (
              <article
                key={project.title}
                className="project-frame overflow-hidden rounded-[32px]"
              >
                <div className="overflow-hidden border-b border-slate-200/80 bg-slate-950 p-3">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <video
                      className="desktop-showcase-video aspect-video w-full bg-black object-contain"
                      playsInline
                      preload="metadata"
                      controls
                      muted
                    >
                      <source src={project.src} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <PlayCircle size={16} />
                    Product walkthrough
                  </div>
                  <h3 className="mt-4 text-[1.45rem] font-[Sora-Bold] tracking-[-0.03em] text-slate-950 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#be123c_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-10">
            <p className="section-kicker section-kicker-dark">Next step</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-[Sora-Bold] leading-tight tracking-[-0.04em] sm:text-5xl">
              If your team needs someone who can build polished product
              experiences and useful AI-powered workflows, I&apos;d love to talk.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/90">
              I&apos;m especially strong when a company wants somebody who can
              own UI quality, move quickly, and think carefully about both the
              product experience and the systems behind it.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hamalanis1@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
              >
                Email Anis
              </a>
              <a
                href="tel:+9779821941408"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                Call or message
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-[36px] p-8">
            <p className="section-kicker">What you can expect</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-[24px] border border-slate-200 bg-white/70 p-5">
                <h3 className="text-xl font-[Sora-Bold] text-slate-950">
                  Clear communication
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  I focus on understanding the product goal first, then building
                  with clarity and momentum.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white/70 p-5">
                <h3 className="text-xl font-[Sora-Bold] text-slate-950">
                  Strong implementation detail
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  From spacing and interactions to API wiring and edge cases, I
                  care about the final quality of the work.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white/70 p-5">
                <h3 className="text-xl font-[Sora-Bold] text-slate-950">
                  Product-minded delivery
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  I aim to ship experiences that are not just functional, but
                  genuinely helpful and convincing to end users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
