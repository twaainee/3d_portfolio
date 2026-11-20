import React, { useState } from 'react'
import { motion } from 'motion/react'

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li"><a href="#home" className="nav-link" onClick={onNavigate}>Home</a></li>
      <li className="nav-li"><a href="#about" className="nav-link" onClick={onNavigate}>About</a></li>
      <li className="nav-li"><a href="#work" className="nav-link" onClick={onNavigate}>Work</a></li>
      <li className="nav-li"><a href="#graphics" className="nav-link" onClick={onNavigate}>Graphics</a></li>
      <li className="nav-li"><a href="#certifications" className="nav-link" onClick={onNavigate}>Certifications</a></li>
      <li className="nav-li"><a href="#contact" className="nav-link" onClick={onNavigate}>Contact</a></li>
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') closeMenu()
  }

  return (
    <header className="fixed inset-x-0 z-20 w-full bg-primary/40 backdrop-blur-lg" onKeyDown={handleKeyDown}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="text-xl font-bold text-neutral-400 transition-colors hover:text-white">Eli Twaine</a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:hidden"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} className="h-6 w-6" alt="" aria-hidden="true" />
          </button>
          <nav aria-label="Primary navigation" className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <motion.div
        id="mobile-navigation-menu"
        className="overflow-hidden text-center sm:hidden"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -8 }}
        transition={{ duration: 0.2 }}
        aria-hidden={!isOpen}
        inert={!isOpen}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <nav aria-label="Mobile navigation" className="pb-5" onClick={closeMenu}>
          <Navigation onNavigate={closeMenu} />
        </nav>
      </motion.div>
    </header>
  )
}

export default Navbar
