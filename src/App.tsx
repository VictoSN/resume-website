import { useState, useEffect, act } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import SlideDrawer from './components/SlideDrawer'
import Overlay from './components/Overlay'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSelection, setActiveSelection] = useState('')
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("displayMode");
    return stored !== null ? stored === "true" : false; // always default light
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem("displayMode", String(darkMode))
  }, [darkMode])


  const handleSelect = (section: string) => {
    setActiveSelection(section)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white flex items-center justify-center">
      <LeftPanel darkMode={darkMode} setDarkMode={setDarkMode} />
      <RightPanel onSelect={handleSelect} />
      <SlideDrawer isDrawerOpen={isDrawerOpen} section={activeSelection} onClose={closeDrawer} />
      <Overlay isDrawerOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  )
}

export default App
