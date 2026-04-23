import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Anis Hamal
          </p>
          <h2 className="mt-3 text-3xl font-[Sora-Bold] tracking-[-0.04em] text-slate-950">
            Building polished products, AI automations, and practical digital
            systems for teams that care about quality.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Open to web, mobile, AI implementation, and n8n automation
            opportunities where thoughtful UI, strong execution, and product
            focus matter.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:hamalanis1@gmail.com"
            className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Email
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              hamalanis1@gmail.com
            </p>
          </a>
          <a
            href="tel:+9779821941408"
            className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Phone
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              +977 9821941408
            </p>
          </a>
          <a
            href="https://calendly.com/hamalanis1/new-meeting-1"
            className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Calendar
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Schedule a call
            </p>
          </a>
          <a
            href="#top"
            className="rounded-[24px] border border-slate-200 bg-slate-950 px-5 py-4 text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Portfolio
            </p>
            <p className="mt-2 text-base font-semibold">Back to top</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
