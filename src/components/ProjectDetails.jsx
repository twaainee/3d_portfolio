import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [])

  const handleDialogKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeModal()
      return
    }

    if (event.key !== 'Tab') return

    const focusable = Array.from(
      dialogRef.current?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []
    )
    if (focusable.length === 0) {
      event.preventDefault()
      dialogRef.current?.focus()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={`Close ${title} project details`}
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-midnight/90 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <img src="assets/close.svg" className="h-5 w-5" alt="" aria-hidden="true" />
        </button>
        <img src={image} alt={`${title} project preview`} className="w-full rounded-t-2xl" />
        <div className="p-5 sm:p-7">
          <h2 id="project-details-title" className="mb-2 pr-12 text-2xl font-bold text-white">{title}</h2>
          <p className="mb-3 font-normal text-neutral-300">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={`${title}-detail-${index}`} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img key={tag.id} src={tag.path} alt={tag.name} className="size-10 rounded-lg hover-animation" />
              ))}
            </div>
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-end font-medium hover-animation sm:self-auto">
                View Project
                <img src="assets/arrow-up.svg" alt="" aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
