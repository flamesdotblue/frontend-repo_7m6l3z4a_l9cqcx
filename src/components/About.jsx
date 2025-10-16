import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0b0d] py-20 text-white">
      <div className="absolute -top-12 left-0 h-24 w-full origin-top-left -skew-y-6 bg-gradient-to-r from-red-600/30 via-orange-500/30 to-amber-400/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-block rounded-md bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-400/20 p-[1px]">
          <div className="rounded-md bg-[#0b0b0d]/80 px-5 py-2">
            <h2 className="bg-gradient-to-br from-orange-300 via-red-200 to-amber-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              About
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-white/85">
              I’m a software engineer obsessed with playful, purposeful interfaces. My work lives at the intersection of performance, accessibility, and originality — turning complex ideas into immersive products that feel effortless.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3">
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">React & TypeScript</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Node & FastAPI</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Design Systems</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">System Design</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Cloud & DevOps</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">AI + 3D Experiences</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-red-500/15 via-orange-500/10 to-amber-400/10 p-6">
              <div className="absolute -left-10 -top-10 h-40 w-40 rotate-12 rounded-full bg-gradient-to-br from-red-500/40 to-orange-400/30 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 -rotate-12 rounded-full bg-gradient-to-br from-amber-400/40 to-orange-400/30 blur-2xl" />
              <h3 className="text-xl font-semibold text-white/90">What drives me</h3>
              <p className="mt-2 text-white/70">
                Design that feels alive. Systems that scale. And a sprinkle of delightful micro‑interactions that make products memorable.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-md bg-white/5 p-3">
                  <div className="text-2xl font-bold text-orange-300">6+</div>
                  <div className="text-white/60">Years</div>
                </div>
                <div className="rounded-md bg-white/5 p-3">
                  <div className="text-2xl font-bold text-orange-300">25+</div>
                  <div className="text-white/60">Projects</div>
                </div>
                <div className="rounded-md bg-white/5 p-3">
                  <div className="text-2xl font-bold text-orange-300">∞</div>
                  <div className="text-white/60">Curiosity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
