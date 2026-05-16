import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import About from './components/About'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("displayMode");
    return stored !== null ? stored === "true" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem("displayMode", String(darkMode))
  }, [darkMode])

  return (
    <div className="min-h-[100dvh] bg-[#F5F2ED] dark:bg-[#0E0E0E] text-[#1a1a1a] dark:text-[#E8E4DC] flex flex-row">
      <div className="hidden md:flex flex-row h-screen">
        <div className='w-[40%] h-screen sticky top-0 flex flex-col'>
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} mobile />
          <Navbar />
        </div>

        <div className='w-[60%] h-screen overflow-y-auto scroll-panel border-l border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]'>
          <div className="px-12 py-16 space-y-20">
            <section id="about"><About /></section>
            <div className="border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
            <section id="education"><Education /></section>
            <div className="border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
            <section id="experience"><Experience /></section>
            <div className="border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
            <section id="skills"><Skill /></section>
            <div className="border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
            <section id="projects"><Project darkMode={darkMode} /></section>
            <div className="pb-8" />
          </div>
        </div>
      </div>

      {/* ── MOBILE: stacked ── */}
      <div className="md:hidden flex flex-col">
        {/* Hero fills top ~55vh */}
        <div className="h-[55vh]">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* Sticky bottom tab bar */}
          <Navbar mobile />
        </div>
 
        {/* Content — padded above bottom tab bar */}
        <div className="px-6 py-10 pb-28 space-y-16">
          <section id="about-m"><About /></section>
          <div className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]" />
          <section id="education-m"><Education /></section>
          <div className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]" />
          <section id="experience-m"><Experience /></section>
          <div className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]" />
          <section id="skills-m"><Skill /></section>
          <div className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]" />
          <section id="projects-m"><Project darkMode={darkMode} /></section>
        </div>
 
      </div>

    </div>
  )
}

export default App
