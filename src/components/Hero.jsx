import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays to match theme; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_20%,rgba(255,98,0,0.25),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Rocket className="h-4 w-4 text-orange-400" />
          <span className="text-sm font-medium tracking-wide text-orange-300/90">Building immersive software</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-orange-300 via-red-300 to-yellow-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Anchal Gupta
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          Software Engineer crafting delightful, high‑performance experiences across web, cloud, and AI — with a love for bold, modern design.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(255,87,34,0.6)] transition-transform hover:scale-105 focus:outline-none"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Slanted divider */}
      <div className="relative z-10 mt-10 h-24 w-full origin-top-left -skew-y-6 bg-gradient-to-r from-red-600/40 via-orange-600/40 to-amber-500/40 blur-[1px]" />
    </section>
  );
};

export default Hero;
