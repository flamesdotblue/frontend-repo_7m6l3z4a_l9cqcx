import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
          <a href="#home" className="text-sm font-semibold tracking-wide text-orange-300">
            AG
          </a>
          <div className="hidden items-center gap-1 sm:flex">
            {[
              { id: '#about', label: 'About' },
              { id: '#projects', label: 'Projects' },
              { id: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 px-3 py-1.5 text-xs font-bold text-black shadow-[0_8px_22px_-8px_rgba(255,87,34,0.7)]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
