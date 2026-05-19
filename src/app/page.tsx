"use client";

import { useState } from "react";
import Image from "next/image";
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="relative group flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Mr Y logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-mono font-bold text-lg text-white tracking-tight">
            {"<Y />"}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-medium bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/80 transition-colors"
          >
            Hire me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-white transition-colors"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-all"
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 rounded-full animate-glow"
          style={{
            background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-2)] animate-glow" />
              <span className="text-xs font-medium text-[var(--color-text-muted)]">
                Beschikbaar voor projecten
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl md:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Hi, ik ben{" "}
              <span className="gradient-text">Yasin</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-[var(--color-text-muted)] max-w-[45ch] leading-relaxed mb-12">
              Software Engineer die complexe problemen vertaalt naar{" "}
              <span className="text-white">elegante oplossingen</span>. Van
              backend architectuur tot moderne interfaces.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent)]/80 transition-all duration-300 hover:gap-4"
              >
                Bekijk mijn werk
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="https://github.com/Yasin-Horani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] font-medium hover:border-[var(--color-border-hover)] hover:text-white transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8">
              {[
                { value: "5+", label: "Jaar ervaring" },
                { value: "10+", label: "Projecten" },
                { value: "4", label: "Tech stacks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[var(--color-accent)]/10 blur-2xl animate-glow" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[var(--color-border)] shadow-[0_0_60px_rgba(108,99,255,0.15)]">
                <Image
                  src="/images/yasin.jpg"
                  alt="Yasin Horani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl glass">
                <p className="text-xs font-mono text-[var(--color-accent)]">
                  &lt;/&gt; Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div className="sticky top-32">
            <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
              // over mij
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mijn <span className="gradient-text">verhaal</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Van nieuwsgierige tiener tot professionele software engineer.
            </p>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-border)]">
              <Image
                src="/images/photo-2.jpg"
                alt="Yasin Horani at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              Op mijn 15e schreef ik mijn eerste regels code in Delphi en
              Visual Basic. Dat moment — zien dat je met tekst iets kunt
              laten bewegen op een scherm — was het begin van alles.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Vandaag werk ik als Software Engineer bij{" "}
              <span className="text-[var(--color-accent)] font-medium">
                Roxit
              </span>
              , waar ik gemeentelijke softwareoplossingen bouw met Java en
              Spring Boot. Hiervoor werkte ik bij Talksome aan webapplicaties
              en API-integraties.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Mijn filosofie: code moet werken, leesbaar zijn, en waarde
              toevoegen. Geen overengineering, geen tech om de tech — gewoon
              slimme oplossingen voor echte problemen.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <span className="text-[var(--color-accent)] font-bold text-sm">
                        {exp.company[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {exp.company}
                      </p>
                      <p className="text-xs text-[var(--color-accent)]">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
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
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.03) 50%, transparent)",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
            // projecten
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gebouwd met <span className="gradient-text">passie</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-[50ch] mx-auto">
            Van enterprise backend tooling tot moderne webapplicaties — elk
            project is een kans om iets beters te maken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{
                background: i % 2 === 0
                  ? "radial-gradient(circle at top right, rgba(108,99,255,0.08), transparent 70%)"
                  : "radial-gradient(circle at top right, rgba(0,212,170,0.08), transparent 70%)",
              }} />

              <div className="flex items-start justify-between mb-6 relative">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: i % 2 === 0
                        ? "rgba(108,99,255,0.1)"
                        : "rgba(0,212,170,0.1)",
                    }}
                  >
                    <span className="font-mono text-xs font-bold" style={{
                      color: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-2)",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-border-hover)] transition-all"
                  aria-label={`GitHub: ${project.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{
                      background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-2)",
                    }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] text-[var(--color-text-muted)] border border-[var(--color-border)]"
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
  const categoryColors: Record<string, string> = {
    Backend: "var(--color-accent)",
    Frontend: "var(--color-accent-2)",
    Data: "#FF6B6B",
    Tools: "#FFD93D",
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
            // skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mijn <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-[50ch] mx-auto">
            Technologieën waar ik dagelijks mee werk en die ik continu
            blijf ontwikkelen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const color = categoryColors[cat] || "var(--color-accent)";
            return (
              <div
                key={cat}
                className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: color }}
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    {cat}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-white">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-[var(--color-text-muted)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${color}, ${color}88)`,
                              boxShadow: `0 0 12px ${color}33`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.05) 50%, transparent)",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
            // contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Laten we{" "}
            <span className="gradient-text">samenwerken</span>
          </h2>
          <p className="text-[var(--color-text-muted)] mb-12 max-w-[45ch] mx-auto">
            Op zoek naar een developer voor je volgende project? Ik hoor
            graag van je.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                label: "Email",
                value: "yasin.horani@roxit.nl",
                href: "mailto:yasin.horani@roxit.nl",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "/in/yasin-horani",
                href: "https://www.linkedin.com/in/yasin-horani",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent)">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                value: "Yasin-Horani",
                href: "https://github.com/Yasin-Horani",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent)">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  {item.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:yasin.horani@roxit.nl"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-accent)] text-white font-medium text-lg hover:bg-[var(--color-accent)]/80 transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,99,255,0.3)]"
          >
            Stuur me een bericht
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/mr-y-logo.jpg"
            alt="Mr Y"
            width={24}
            height={24}
            className="rounded-md opacity-60"
          />
          <span className="text-sm text-[var(--color-text-muted)]">
            {new Date().getFullYear()} Yasin Horani
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-muted)]/50">
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
