"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--divider)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-sans text-base tracking-tight"
          style={{ color: "var(--text)", textDecoration: "none" }}
        >
          Edis Mizić
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm"
              style={{
                color: active === href.slice(1) ? "var(--text)" : "var(--muted)",
                transition: "color 200ms ease",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer gap-[6px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: "var(--text)",
              transition: "transform 220ms ease",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: "var(--text)",
              transition: "opacity 220ms ease",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: "var(--text)",
              transition: "transform 220ms ease",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="sm:hidden overflow-hidden"
        style={{
          maxHeight: open ? "200px" : "0",
          transition: "max-height 300ms ease",
          background: "var(--bg)",
          borderTop: open ? "1px solid var(--divider)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-5 gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm"
              style={{
                color: active === href.slice(1) ? "var(--text)" : "var(--muted)",
                transition: "color 200ms ease",
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
