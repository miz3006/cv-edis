"use client";

import { useState } from "react";

const experience = [
  {
    number: "01",
    role: "Student Data Analyst",
    company: "Knauf Insulation",
    date: "2025 — 2026",
    detail:
      "My first real taste of working in a big corporate environment. I spent most of my time writing and maintaining Python scripts for internal data analyses, and built an automation for a lab process using Power Automate. On the data side, I was querying production data through Dremio with SQL CTEs, window functions, the whole deal.\n\nLearned a lot beyond just the technical stuff what it actually feels like to work in a large team, sit through corporate meetings, and think about problems from a data angle.",
    tags: ["Python", "SQL", "Power Automate", "Dremio"],
    link: null,
  },
  {
    number: "02",
    role: "Web Application Developer",
    company: "Phosphorland · Braga, PT",
    date: "2023 — 2023",
    detail:
      "Spent a month at a software agency in Portugal as my first dev experience abroad. Worked alongside the team on client web applications, picking up both frontend and backend tasks as they came. Short but formative it was my first real look at professional software development and working in an international environment.",
    tags: ["Web Development", "Frontend", "Backend", "International"],
    link: null,
  },
  {
    number: "03",
    role: "Graphic Designer & Video Editor",
    company: "Dark Matter Design LLC",
    date: "2021 — 2022",
    detail:
      "Created video content based on sci-fi lore from the SCP Foundation universe a fictional organization with a massive online following. The job was all about translating written stories and documents into visuals that actually felt like they belonged in that world. Required a lot of creativity and imagination to interpret what a writer envisioned, plus reliability since videos were published on a rolling schedule with no room for delays.",
    tags: ["Video Editing", "Motion Graphics", "Creative Direction", "Adobe Suite"],
    link: { label: "@SCPOrientation", href: "https://www.youtube.com/@SCPOrientation" },
  },
];

export default function ExperienceList() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      {experience.map((job) => {
        const isOpen = open === job.number;
        return (
          <div
            key={job.number}
            style={{ borderBottom: "1px solid var(--divider)" }}
          >
            {/* Row — clickable */}
            <div
              className="experience-row experience-row-grid grid items-start py-6 cursor-pointer"
              style={{ gap: "1.5rem" }}
              onClick={() => setOpen(isOpen ? null : job.number)}
            >
              <span className="text-xs font-mono pt-0.5" style={{ color: "var(--muted)" }}>
                {job.number}
              </span>
              {/* Role + company on mobile */}
              <div>
                <span className="font-sans text-base block" style={{ color: "var(--text)", fontWeight: 400 }}>
                  {job.role}
                </span>
                <span className="text-sm md:hidden" style={{ color: "var(--muted)" }}>
                  {job.company}
                </span>
              </div>
              {/* Company — desktop only */}
              <span className="hidden md:block text-sm" style={{ color: "var(--muted)" }}>
                {job.company}
              </span>
              <div className="flex items-start gap-4 pt-0.5">
                <span className="text-sm tabular-nums" style={{ color: "var(--muted)" }}>
                  {job.date}
                </span>
                <span
                  className="text-sm"
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
            </div>

            {/* Expanded detail */}
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "300px" : "0",
                transition: "max-height 400ms ease",
              }}
            >
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "2.5rem 1fr",
                  gap: "1.5rem",
                  paddingBottom: "2rem",
                }}
              >
                <div />
                <div>
                  <div className="mb-5" style={{ maxWidth: "60ch" }}>
                    {job.detail.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text)", marginBottom: i < job.detail.split("\n\n").length - 1 ? "0.75rem" : 0 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs"
                        style={{
                          color: "var(--muted)",
                          border: "1px solid var(--divider)",
                          padding: "2px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {job.link && (
                      <a
                        href={job.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs link-muted"
                        style={{ marginLeft: "0.5rem" }}
                      >
                        {job.link.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
