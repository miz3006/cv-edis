import Image from "next/image";
import Nav from "./components/Nav";
import ProjectsList from "./components/ProjectsList";
import ExperienceList from "./components/ExperienceList";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      {/* ─── NAVIGATION ─────────────────────────────────────────────── */}
      <Nav />

      <main>
        {/* ─── HERO ───────────────────────────────────────────────────── */}
        <section
          className="hero-wash"
          style={{
            minHeight: "55vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderBottom: "1px solid var(--divider)",
            paddingTop: "4rem",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ flex: 1, minHeight: "calc(55vh - 4rem)" }}
          >
            {/* Left: text — vertically centered */}
            <div
              className="flex flex-col justify-center"
              style={{ paddingTop: "4rem", paddingBottom: "1.5rem", paddingLeft: "clamp(2rem, 8vw, 7rem)", paddingRight: "2rem", maxWidth: "700px" }}
            >
              {/* Overline */}
              <p
                className="text-xs tracking-widest uppercase mb-8 flex flex-wrap items-center gap-3 hero-enter hero-enter-1"
                style={{ color: "var(--muted)" }}
              >
                <span className="inline-flex items-center gap-2" style={{ whiteSpace: "nowrap" }}>
                  <span className="status-dot" aria-hidden />
                  Open to opportunities
                </span>
                <span style={{ color: "var(--subtle)" }}>·</span>
                Ljubljana
              </p>

              {/* Headline */}
              <h1
                className="font-sans mb-8 hero-enter hero-enter-2"
                style={{
                  fontSize: "clamp(2.75rem, 4.8vw, 4.2rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  fontWeight: 300,
                }}
              >
                Hi, I&apos;m Edis,
                <br />
                <span style={{ color: "var(--muted)" }}>
                  building{" "}
                  <span className="accent-underline accent-underline-draw">
                    web &amp; mobile
                  </span>{" "}
                  apps
                </span>
              </h1>

              {/* Bio */}
              <p
                className="text-base leading-relaxed hero-enter hero-enter-3"
                style={{ color: "var(--muted)", maxWidth: "38ch" }}
              >
                22-year-old CS student in Ljubljana, building web and mobile apps with a focus on{" "}
                <span className="font-serif italic" style={{ fontSize: "1.06em" }}>
                  clean design
                </span>{" "}
                and shipping things that work.
              </p>
            </div>

            {/* Right: portrait fills full height */}
            <div
              className="hidden md:flex items-end justify-center hero-portrait-enter"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Circle backdrop */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-5%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "#111111",
                }}
              />
              {/* Portrait */}
              <Image
                src="/edis.png"
                alt="Edis Mizić"
                width={1200}
                height={1200}
                priority
                sizes="(min-width: 768px) 45vw, 0px"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "90%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── SELECTED PROJECTS ──────────────────────────────────────── */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: "1px solid var(--divider)" }}
        >
          <FadeIn>
            <div
              className="flex items-baseline justify-between mb-0"
              style={{
                borderBottom: "1px solid var(--divider)",
                paddingBottom: "1.25rem",
              }}
            >
              <h2
                className="font-sans"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--muted)",
                }}
              >
                Selected <span className="accent-underline">Projects</span>
              </h2>
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                03 projects
              </span>
            </div>

            <ProjectsList />
          </FadeIn>
        </section>

        {/* ─── WORK EXPERIENCE ────────────────────────────────────────── */}
        <section
          id="experience"
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: "1px solid var(--divider)" }}
        >
          <FadeIn>
            <div
              className="flex items-baseline justify-between"
              style={{
                borderBottom: "1px solid var(--divider)",
                paddingBottom: "1.25rem",
              }}
            >
              <h2
                className="font-sans"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--muted)",
                }}
              >
                Work <span className="accent-underline">Experience</span>
              </h2>
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                03 positions
              </span>
            </div>

            <ExperienceList />

            {/* Atlantis note */}
            <p
              className="text-sm leading-relaxed mt-10 max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              For almost three years alongside my studies, I worked weekends at the reception of Aquapark Atlantis. An experience that gave me strong communication skills and a solid customer service routine.
            </p>
          </FadeIn>
        </section>

        {/* ─── EDUCATION ──────────────────────────────────────────────── */}
        <section
          id="education"
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: "1px solid var(--divider)" }}
        >
          <FadeIn>
            <div
              className="flex items-baseline justify-between"
              style={{
                borderBottom: "1px solid var(--divider)",
                paddingBottom: "1.25rem",
              }}
            >
              <h2
                className="font-sans"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--muted)",
                }}
              >
                <span className="accent-underline">Education</span>
              </h2>
            </div>

            <div
              className="flex flex-col md:flex-row md:items-baseline md:justify-between py-6"
              style={{ borderBottom: "1px solid var(--divider)", gap: "0.35rem" }}
            >
              <div>
                <span
                  className="font-sans text-lg block"
                  style={{ color: "var(--text)", fontWeight: 400 }}
                >
                  BSc, Computer and Information Science
                </span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>
                  University of Ljubljana — Faculty of Computer and Information Science
                </span>
              </div>
              <span className="text-sm tabular-nums" style={{ color: "var(--muted)" }}>
                2024 — Present
              </span>
            </div>

            <div
              className="flex flex-col md:flex-row md:items-baseline md:justify-between py-6"
              style={{ borderBottom: "1px solid var(--divider)", gap: "0.35rem" }}
            >
              <div>
                <span
                  className="font-sans text-lg block"
                  style={{ color: "var(--text)", fontWeight: 400 }}
                >
                  Computer Technician
                </span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>
                  Vegova Ljubljana — Secondary School of Electrical Engineering and Computer Science
                </span>
              </div>
              <span className="text-sm tabular-nums" style={{ color: "var(--muted)" }}>
                2020 — 2024
              </span>
            </div>

            <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
              Just wrapped up my second year at university, heading into the third.
            </p>
          </FadeIn>
        </section>

        {/* ─── ABOUT ──────────────────────────────────────────────────── */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 py-24"
          style={{ borderBottom: "1px solid var(--divider)" }}
        >
          <FadeIn>
            <div
              className="flex items-baseline justify-between"
              style={{
                borderBottom: "1px solid var(--divider)",
                paddingBottom: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              <h2
                className="font-sans"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--muted)",
                }}
              >
                <span className="accent-underline">About</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3rem" }}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text)", maxWidth: "48ch" }}
              >
                When I’m not building stuff, I’m probably training — gym, running, maybe some martial arts here and there. Mostly so I can eat more without guilt.
                <br /><br />
                I travel whenever I can. New places, new food, new people. There&apos;s always something worth seeing.
                <br /><br />
                The rest of the time I&apos;m probably out with friends, doing something that doesn&apos;t involve a screen.
              </p>

              <div className="flex flex-col justify-end" style={{ gap: "0" }}>
                {[
                  { label: "Training", value: "Gym · Running · Martial Arts" },
                  { label: "Travel", value: "Always planning the next one" },
                  { label: "Food", value: "The whole point of sport" },
                  { label: "Otherwise", value: "Good company, good time" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "0.875rem 0",
                      borderBottom: "1px solid var(--divider)",
                    }}
                  >
                    <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>{label}</span>
                    <span className="text-sm" style={{ color: "var(--text)" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* ─── CONTACT / FOOTER ───────────────────────────────────────── */}
      <footer id="contact" className="px-6" style={{ background: "var(--section-bg)" }}>
        <div className="max-w-6xl mx-auto pt-24 pb-8">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>
              Contact
            </p>

            <h2
              className="font-sans tracking-[-0.03em] mb-12"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.12,
                color: "var(--text)",
                fontWeight: 300,
              }}
            >
              Have a project or a role in mind?
              <br />
              <span className="font-serif italic" style={{ color: "var(--muted)" }}>
                Let’s talk.
              </span>
            </h2>

            <a
              href="mailto:edismizic12@gmail.com"
              className="email-link"
              style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
            >
              edismizic12@gmail.com
            </a>

            <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
              +386 70 431 624 &nbsp;·&nbsp; Ljubljana, Slovenia
            </p>

            {/* Socials */}
            <div className="flex flex-wrap mt-12" style={{ gap: "10px" }}>
              <a
                href="https://github.com/miz3006"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/edismizic/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://apps.apple.com/si/app/whereat-spin-go/id6776366819"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                WhereAt on the App Store
              </a>
            </div>
          </FadeIn>

          {/* Bottom bar */}
          <div
            className="flex items-center justify-between mt-24 pt-6"
            style={{ borderTop: "1px solid var(--divider)" }}
          >
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              © 2026 Edis Mizić
            </span>
            <a
              href="#"
              className="link-muted text-sm"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Back to top
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 10V2M2.5 5.5L6 2l3.5 3.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
