import { Drawer } from "antd";
import React, { useState } from "react";
import { Mail, Menu, X } from "react-feather";

const navItems = [
  { label: "About", href: "#about-me" },
  { label: "Strengths", href: "#proficiency" },
  { label: "Work", href: "#project-images" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={closeDrawer}
        open={open}
        width={320}
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex h-full flex-col bg-[#f5efe6]">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-0">
                Anis Hamal
              </p>
              <p className="text-lg font-[Sora-Bold] text-slate-950 mb-0">
                Portfolio
              </p>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
              onClick={closeDrawer}
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-2 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-slate-200 px-6 py-6">
            <a
              href="mailto:hamalanis1@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
            >
              <Mail size={16} />
              Contact me
            </a>
          </div>
        </div>
      </Drawer>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border border-white/60 bg-white/80 px-4 py-2.5 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-full sm:px-5 sm:py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/img/logo-anis.png"
              width={46}
              height={46}
              alt="Anis Hamal logo"
              className="h-11 w-11 object-contain"
            />
            <div className="sm:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-0">
                Anis Hamal
              </p>
              <p className="text-xs font-semibold text-slate-900 mb-0">
                Product & AI builder
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 mb-0">
                Anis Hamal
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-0">
                Web, mobile & AI automation developer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="mailto:hamalanis1@gmail.com"
              className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
