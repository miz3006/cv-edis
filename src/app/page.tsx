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
              style={{ paddingTop: "4rem", paddingBottom: "1.5rem", paddingLeft: "clamp(2rem, 8vw, 7rem)", paddingRight: "2rem", maxWidth: "600px" }}
            >
              {/* Overline */}
              <p
                className="text-xs tracking-widest uppercase mb-8"
                style={{ color: "var(--muted)" }}
              >
                CS Student &nbsp;·&nbsp; Ljubljana
              </p>

              {/* Headline */}
              <h1
                className="font-sans tracking-[-0.03em] mb-8"
                style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  lineHeight: "1.08",
                  color: "var(--text)",
                  fontWeight: 300,
                }}
              >
                Hi, I am Edis,
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Building Web & Mobile Apps
                </span>
              </h1>

              {/* Bio */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)", maxWidth: "38ch" }}
              >
                21-year-old CS student in Ljubljana, building web and mobile apps with a focus on clean design and shipping things that work.
              </p>
            </div>

            {/* Right: portrait fills full height */}
            <div
              className="hidden md:flex items-end justify-center"
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
              <img
                src="/edis.png"
                alt="Edis Mizić"
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
                className="font-sans text-xl tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Selected Projects
              </h2>
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                04 projects
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
                className="font-sans text-xl tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Work Experience
              </h2>
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                03 positions
              </span>
            </div>

            <ExperienceList />

            {/* Atlantis note */}
            <p
              className="text-sm leading-relaxed mt-10 max-w-lg"
              style={{ color: "var(--muted)", fontStyle: "italic" }}
            >
              For almost three years alongside my studies, I worked weekends at the reception of Aquapark Atlantis. An experience that gave me strong communication skills and a solid customer service routine.
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
                className="font-sans text-xl tracking-tight"
                style={{ color: "var(--text)" }}
              >
                About
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

        {/* ─── CONTACT ────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="px-6 py-12"
          style={{ background: "var(--section-bg)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
                Contact
              </p>
              <div style={{ borderTop: "1px solid var(--divider)" }}>
                {[
                  { label: "Email", value: "edismizic12@gmail.com", href: "mailto:edismizic12@gmail.com" },
                  { label: "Phone", value: "+386 70 431 624", href: "tel:+38670431624" },
                  { label: "LinkedIn", value: "linkedin.com/in/edismizic", href: "https://www.linkedin.com/in/edismizic/", external: true },
                  { label: "GitHub", value: "github.com/miz3006", href: "https://github.com/miz3006", external: true },
                  { label: "CV", value: "Edis_Mizic_CV.pdf", href: "/Edis_Mizic_CV.pdf", external: true },
                ].map(({ label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="contact-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.65rem 0",
                      borderBottom: "1px solid var(--divider)",
                      textDecoration: "none",
                      transition: "opacity 200ms ease",
                    }}
                  >
                    <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)", minWidth: "4.5rem" }}>{label}</span>
                    <span className="text-xs" style={{ color: "var(--text)" }}>{value}</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)", flexShrink: 0 }} aria-hidden>
                      <path d="M2 10L10 2M5 2h5v5" />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-6"
        style={{
          background: "var(--section-bg)",
          borderTop: "1px solid var(--divider)",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            © 2026 Edis Mizić
          </span>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {/* GitHub */}
            <a
              href="https://github.com/miz3006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="link-muted"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/edismizic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="link-muted"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
