"use client";

import { useState } from "react";
import { projects, skills, experience } from "./data";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "Over mij" },
    { href: "#projects", label: "Projecten" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-gray)]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-medium text-[var(--color-primary)] text-lg tracking-tight"
        >
          {"<Y />"}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--color-text)]"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-[var(--color-bg)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--color-secondary)] mb-4 tracking-wide">
            Software Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-dark)] leading-[1.1] mb-6">
            Yasin
            <br />
            <span className="text-[var(--color-primary)]">Horani</span>
          </h1>
          <p className="text-lg text-[var(--color-text)] max-w-[50ch] leading-relaxed mb-10">
            Full-stack developer met een passie voor clean code en moderne
            webapplicaties. Van Java en Spring Boot tot React en Next.js —
            ik bouw software die werkt.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium text-sm hover:bg-[var(--color-primary)]/90 transition-colors"
            >
              Bekijk projecten
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-gray)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <p className="font-mono text-sm text-[var(--color-secondary)] mb-3">
              01
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
              Over mij
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[var(--color-text)] leading-relaxed text-lg">
              Ik begon met programmeren op mijn 15e — eerst met Delphi en
              Visual Basic, later met Java. Die nieuwsgierigheid naar hoe
              software werkt is er nooit meer weggegaan.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed">
              Vandaag de dag werk ik als Software Engineer bij{" "}
              <span className="font-semibold text-[var(--color-primary)]">
                Roxit
              </span>
              , waar ik gemeentelijke softwareoplossingen bouw met Java en
              Spring Boot. Eerder heb ik bij Talksome gewerkt aan
              webapplicaties en API-integraties.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed">
              Ik geloof in clean code, goede documentatie, en pragmatische
              oplossingen. Agile werken zit in mijn DNA — ik houd van korte
              iteraties en directe feedback.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-gray)]/20"
                >
                  <p className="font-semibold text-[var(--color-dark)] mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[var(--color-secondary)] font-medium mb-2">
                    {exp.role} &middot; {exp.period}
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--color-dark)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-[var(--color-secondary)] mb-3">
          02
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Projecten
        </h2>
        <p className="text-[#999] max-w-[55ch] mb-16">
          Een selectie van projecten waar ik aan heb gewerkt — van backend
          tooling tot moderne webapplicaties.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[var(--color-secondary)]/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-[var(--color-secondary)]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[var(--color-secondary)] transition-colors"
                  aria-label={`GitHub repo voor ${project.title}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="text-[var(--color-secondary)] mt-1 shrink-0">
                      &rarr;
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-[var(--color-secondary)] mb-3">
          03
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gray)] mb-6">
                {cat}
              </h3>
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[var(--color-dark)]">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-[var(--color-gray)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--color-surface)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="font-mono text-sm text-[var(--color-secondary)] mb-3">
            04
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
            Laten we praten
          </h2>
          <p className="text-[var(--color-text)] leading-relaxed mb-10">
            Op zoek naar een developer, of gewoon een goed gesprek over
            software? Stuur me een bericht.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:yasin.horani@roxit.nl"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[var(--color-gray)]/20 hover:border-[var(--color-primary)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                  Email
                </p>
                <p className="text-sm text-[var(--color-text)]">
                  yasin.horani@roxit.nl
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/yasin-horani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[var(--color-gray)]/20 hover:border-[var(--color-secondary)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-secondary)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-secondary)] transition-colors">
                  LinkedIn
                </p>
                <p className="text-sm text-[var(--color-text)]">
                  linkedin.com/in/yasin-horani
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Yasin-Horani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[var(--color-gray)]/20 hover:border-[var(--color-dark)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-dark)]/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-dark)">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-dark)] transition-colors">
                  GitHub
                </p>
                <p className="text-sm text-[var(--color-text)]">
                  github.com/Yasin-Horani
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-gray)]/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[var(--color-gray)]">
          {"<Y />"} &middot; {new Date().getFullYear()}
        </p>
        <p className="text-xs text-[var(--color-gray)]">
          Gebouwd met Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
