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
    <div className="min-h-screen bg-[#F5F2ED] dark:bg-[#0E0E0E] text-[#1a1a1a] dark:text-[#E8E4DC] flex flex-row">
      <div className='w-[40%] h-screen sticky top-0 flex flex-col'>
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
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
          <section id="projects"><Project /></section>
          <div className="pb-8" />
        </div>
      </div>
    </div>
  )
}

export default App
