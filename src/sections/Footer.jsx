import React from 'react'
import { mySocials } from '../constants'

const Footer = () => {
  return (
    <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-3 text-sm text-neutral-400 c-space section-spacing">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <nav aria-label="Social links" className="pointer-events-auto relative z-10 flex items-center gap-2">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            aria-label={`Visit ${social.name}`}
            className="pointer-events-auto relative z-10 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <img src={social.icon} className="size-5" alt="" aria-hidden="true" />
          </a>
        ))}
      </nav>
      <p className="text-xs text-neutral-500 sm:text-sm">© 2026 Elijah Twaine. All rights reserved.</p>
    </footer>
  )
}

export default Footer
