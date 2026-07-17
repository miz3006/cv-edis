"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ProjectImage = { src: string; width: number; height: number };

type Project = {
  number: string;
  title: string;
  type: string;
  year?: string;
  stack: string;
  description: string;
  detail: string;
  tags: string[];
  images: ProjectImage[];
  links: { label: string; href: string; appStoreBadge?: boolean }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "WhereAt",
    type: "iOS App",
    stack: "React Native · Expo · Supabase",
    featured: true,
    description:
      "My best product by far — kills the \"where do we go tonight?\" debate. Spin the wheel, let it decide.",
    detail:
      "WhereAt is my most complete product to date — an iOS app that helps you decide where to go based on your current vibe and location. It surfaces nearby bars, restaurants, coffee spots and outdoor hangouts from a curated base of 40+ places in Ljubljana, lets you filter by category, and when nobody can decide, you hit spin and let the app pick. Accept the suggestion, spin again, or save it for later — that simple decision loop is the core of the experience.\n\nBeyond the wheel, it ships everything a real product needs: full authentication (Apple, Google, email), a favorites system, detailed place pages with opening hours and live open/closed status, push notifications, and a personal profile with your stats.\n\nBuilt with React Native and Expo (Expo Router, strict TypeScript), styled with NativeWind v4. Supabase (Postgres + Auth) powers the backend, including a custom search_places RPC that takes the user’s location and returns ranked results with real-time availability. Analytics run through PostHog. Currently iOS-only.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "NativeWind", "PostHog"],
    images: [
      { src: "/projects/whereat-1.jpg", width: 960, height: 2077 },
      { src: "/projects/whereat-2.jpg", width: 960, height: 2077 },
      { src: "/projects/whereat-3.jpg", width: 960, height: 2077 },
      { src: "/projects/whereat-4.jpg", width: 960, height: 2077 },
    ],
    links: [
      {
        label: "Download on the App Store",
        href: "https://apps.apple.com/si/app/whereat-spin-go/id6776366819",
        appStoreBadge: true,
      },
      { label: "Visit Website", href: "https://whereatapp.vercel.app/" },
    ],
  },
  {
    number: "02",
    title: "Asian Massage Booking",
    type: "Web App",
    stack: "ASP.NET · C# · SQL Server",
    description:
      "Full-stack booking app for massage appointments, built as a university team project.",
    detail:
      "A full-stack web application for booking massage appointments, built as a university team project with a classmate. The app covers the core booking flow — browsing services, selecting time slots, and managing reservations — plus a basic admin panel for staff-side management.",
    tags: ["ASP.NET", "C#", "SQL Server", "University Project"],
    images: [
      { src: "/projects/massage.jpg", width: 1600, height: 993 },
      { src: "/projects/masaza-2.jpg", width: 1600, height: 1000 },
      { src: "/projects/masaza-3.jpg", width: 1600, height: 896 },
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/miz3006/massage-booking-app" }],
  },
  {
    number: "03",
    title: "VELIC Website",
    type: "Design & Dev",
    year: "2024",
    stack: "Figma · WordPress",
    description:
      "One of my first projects — full visual design in Figma, built and deployed in WordPress.",
    detail:
      "One of my first projects: a website designed and developed for a client as a freelance job. Created the full visual design in Figma, then built and deployed it in WordPress — an end-to-end project covering both design and implementation.",
    tags: ["Figma", "WordPress", "Freelance", "Web Design"],
    images: [
      { src: "/projects/inoles.png", width: 1440, height: 888 },
      { src: "/projects/velic-2.png", width: 1470, height: 772 },
      { src: "/projects/velic-3.png", width: 1474, height: 1028 },
    ],
    links: [{ label: "View Figma Design", href: "https://www.figma.com/design/tGkEKHOQWaQJ4FxdsZjAki/Untitled?node-id=0-1&t=n7EyhJ7RmCK7SYkg-1" }],
  },
];

const isMobile = (type: string) => type === "iOS App" || type === "Mobile App";

function Lightbox({ images, index, title, onClose, maxWidth = "min(88vw, 480px)" }: { images: ProjectImage[]; index: number; title: string; onClose: () => void; maxWidth?: string }) {
  const [current, setCurrent] = useState(index);
  const [mounted, setMounted] = useState(false);
  const hasPrev = current > 0;
  const hasNext = current < images.length - 1;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) setCurrent((c) => c - 1);
      if (e.key === "ArrowRight" && hasNext) setCurrent((c) => c + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [hasPrev, hasNext, onClose]);

  const content = (
    <div
      onClick={onClose}
      tabIndex={-1}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "24px",
        cursor: "zoom-out",
      }}
    >
      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent(current - 1); }}
          aria-label="Previous"
          style={{
            position: "fixed",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "10px 14px",
            borderRadius: "2px",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          ‹
        </button>
      )}

      <img
        src={images[current].src}
        alt={`${title} screenshot ${current + 1}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth,
          maxHeight: "90vh",
          height: "auto",
          display: "block",
          cursor: "default",
          borderRadius: "10px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      />

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent(current + 1); }}
          aria-label="Next"
          style={{
            position: "fixed",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "10px 14px",
            borderRadius: "2px",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          ›
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <span
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.45)",
            fontSize: "12px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {current + 1} / {images.length}
        </span>
      )}

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "fixed",
          top: "20px",
          right: "24px",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          padding: "8px",
          opacity: 0.55,
          lineHeight: 1,
          fontSize: "24px",
        }}
      >
        ×
      </button>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}

function MobileGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    setActive(idx);
    trackRef.current?.children[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    const scrollLeft = track.scrollLeft;
    const idx = Math.round(scrollLeft / (itemWidth + 16));
    setActive(Math.max(0, Math.min(idx, images.length - 1)));
  };

  return (
    <div>
      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: "4px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            aria-label={`View ${title} screenshot ${i + 1}`}
            style={{
              display: "block",
              padding: 0,
              background: "none",
              border: "none",
              cursor: "zoom-in",
              flexShrink: 0,
              scrollSnapAlign: "center",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            <Image
              src={img.src}
              alt={`${title} screenshot ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="140px"
              style={{
                width: "140px",
                height: "auto",
                display: "block",
                borderRadius: "18px",
                border: "1px solid var(--divider)",
                transition: "opacity 200ms ease",
                opacity: active === i ? 1 : 0.55,
              }}
            />
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginTop: "14px",
            alignItems: "center",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Screenshot ${i + 1}`}
              style={{
                width: active === i ? "18px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: active === i ? "var(--text)" : "var(--divider)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 200ms ease, background 200ms ease",
              }}
            />
          ))}
        </div>
      )}

      {lightbox !== null && (
        <Lightbox images={images} index={lightbox} title={title} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

function WebGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              border: "1px solid var(--divider)",
              background: "none",
              cursor: "zoom-in",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            aria-label={`View ${title} screenshot ${i + 1} fullscreen`}
            className="gallery-thumb"
          >
            <Image
              src={img.src}
              alt={`${title} screenshot ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 40vw, 90vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <span
              className="gallery-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 200ms ease",
              }}
              aria-hidden
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          title={title}
          maxWidth="min(92vw, 960px)"
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

export default function ProjectsList() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .gallery-thumb:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>

      <div>
        {projects.map((project) => {
          const isOpen = open === project.number;
          return (
            <div
              key={project.number}
              style={{ borderBottom: "1px solid var(--divider)" }}
            >
              {/* Row */}
              <div
                className="experience-row project-row-grid row-toggle grid py-7 cursor-pointer"
                style={{ gap: "1.5rem", alignItems: "start" }}
                onClick={() => setOpen(isOpen ? null : project.number)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(isOpen ? null : project.number);
                  }
                }}
              >
                <span
                  className="font-sans"
                  style={{
                    color: "var(--subtle)",
                    fontSize: "1.25rem",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {project.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="font-sans text-lg leading-tight"
                      style={{ color: "var(--text)", fontWeight: 400 }}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        className="text-[10px] tracking-widest uppercase"
                        style={{
                          color: "var(--text)",
                          border: "1px solid var(--text)",
                          padding: "2px 10px",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Flagship
                      </span>
                    )}
                  </div>
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.type}
                    {project.year ? ` · ${project.year}` : ""}
                  </span>
                </div>

                <p
                  className="hidden md:block text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                <span
                  className="text-sm pt-1"
                  style={{
                    color: "var(--muted)",
                    transition: "transform 200ms ease",
                    display: "inline-block",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    userSelect: "none",
                  }}
                >
                  +
                </span>
              </div>

              {/* Expanded detail */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? "1600px" : "0",
                  transition: "max-height 450ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div
                  className="grid detail-grid"
                  style={{
                    gap: "1.5rem",
                    paddingBottom: "3rem",
                  }}
                >
                  <div />
                  <div
                    className="project-detail-cols grid"
                    style={{ gap: "2.5rem", alignItems: "start" }}
                  >
                    {/* Left: text */}
                    <div>
                      {/* Stack label */}
                      <p
                        className="text-xs font-mono mb-5"
                        style={{
                          color: "var(--subtle)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.stack}
                      </p>

                      {/* Detail paragraphs */}
                      <div className="mb-6" style={{ color: "var(--text)" }}>
                        {project.detail.split("\n\n").map((para, i, arr) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed"
                            style={{ marginBottom: i < arr.length - 1 ? "0.875rem" : 0 }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs"
                            style={{
                              color: "var(--muted)",
                              border: "1px solid var(--divider)",
                              padding: "4px 12px",
                              borderRadius: "999px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {project.links.length > 0 && (
                        <div className="flex flex-wrap items-center" style={{ gap: "1.25rem" }}>
                          {project.links.map((link) =>
                            link.appStoreBadge ? (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                style={{ display: "inline-block", lineHeight: 0 }}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="/app-store-badge.svg"
                                  alt={link.label}
                                  width={120}
                                  height={40}
                                  style={{ display: "block", height: "40px", width: "auto" }}
                                />
                              </a>
                            ) : (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-muted text-xs"
                                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                              >
                                {link.label}
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                  <path d="M2 10L10 2M5 2h5v5" />
                                </svg>
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right: gallery */}
                    {project.images.length > 0 && (
                      isMobile(project.type)
                        ? <MobileGallery images={project.images} title={project.title} />
                        : <WebGallery images={project.images} title={project.title} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
