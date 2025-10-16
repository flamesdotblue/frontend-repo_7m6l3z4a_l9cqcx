import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0b0b0d] py-20 text-white">
      <div className="absolute -top-12 left-0 h-24 w-full origin-top-left -skew-y-6 bg-gradient-to-r from-rose-600/30 via-red-600/30 to-orange-600/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-block rounded-md bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-400/20 p-[1px]">
          <div className="rounded-md bg-[#0b0b0d]/80 px-5 py-2">
            <h2 className="bg-gradient-to-br from-orange-300 via-red-200 to-amber-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              Contact
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white/90">Let’s build something unforgettable.</h3>
            <p className="mt-2 text-white/70">
              Available for freelance collaborations, full‑time roles, and creative experiments.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="mailto:hello@anchal.dev"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-black"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 text-xs text-white/60">
          © {new Date().getFullYear()} Anchal Gupta. Crafted with care and a dash of chaos.
        </div>
      </div>
    </section>
  );
};

export default Contact;
