import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Tiles UI Kit',
    description:
      'A reactive design system with slanted, neon‑glow components and motion primitives for high‑energy dashboards.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Realtime Collab Canvas',
    description:
      'WebGL‑powered whiteboard with multiplayer cursors, ink physics, and buttery‑smooth performance.',
    tags: ['WebGL', 'FastAPI', 'WebSockets'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'LLM Ops Toolkit',
    description:
      'Evaluation harness and prompt pipelines to ship reliable, cost‑efficient AI features at scale.',
    tags: ['Python', 'LLMs', 'Observability'],
    demo: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0c] py-20 text-white">
      <div className="absolute -top-12 left-0 h-24 w-full origin-top-left -skew-y-6 bg-gradient-to-r from-orange-600/30 via-red-600/30 to-rose-600/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-block rounded-md bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-400/20 p-[1px]">
          <div className="rounded-md bg-[#0a0a0c]/80 px-5 py-2">
            <h2 className="bg-gradient-to-br from-orange-300 via-red-200 to-amber-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 p-5 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rotate-12 bg-gradient-to-br from-red-500/30 to-orange-400/20 blur-2xl" />

              <h3 className="text-xl font-semibold text-white/90">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 px-3 py-2 text-xs font-semibold text-black shadow-[0_10px_30px_-10px_rgba(255,87,34,0.6)] transition-transform hover:scale-105"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 backdrop-blur-sm hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
