import React from 'react'
import { useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const certificates = [
  {
    title: 'HTML Essentials',
    href: '/assets/certificates/HTML_Essentials_certificate_twainemarquez-gmail-com_306c1555-b39a-4983-b0f5-f858eee5258d.pdf',
  },
  {
    title: 'CSS Essentials',
    href: '/assets/certificates/CSS_Essentials_certificate_twainemarquez-gmail-com_49b1ad56-e211-4363-a94b-9a1e11e505ff.pdf',
  },
  {
    title: 'Python Essentials 1',
    href: '/assets/certificates/Python_Essentials_1_certificate_202411385-gordoncollege-edu-ph_d841f0e5-88a2-4929-ba5a-e422a12bc52f.pdf',
  },
  {
    title: 'Python Essentials 2',
    href: '/assets/certificates/Python_Essentials_2_certificate_202411385-gordoncollege-edu-ph_4b32d6f2-7ac3-4c09-82de-492806040838.pdf',
  },
  {
    title: 'Fortinet NSE 1: Certified in Cybersecurity',
    href: '/assets/certificates/Fortinet-NSE-1-Certified-in-Cybersecurity.pdf',
  },
  {
    title: 'Introduction to Data Privacy',
    href: '/assets/certificates/intro_to_data_privacy.pdf',
  },
  {
    title: 'Data Privacy and Good Governance',
    href: '/assets/certificates/data_privacy-good_governance.pdf',
  },
  {
    title: 'Visual Graphics Design NC III',
    href: '/assets/certificates/NC.pdf',
  },
]

const Certifications = () => {
  const [preview, setPreview] = useState(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 10, stiffness: 50 })
  const springY = useSpring(y, { damping: 10, stiffness: 50 })

  const handleMouseMove = (event) => {
    const previewWidth = Math.min(320, window.innerWidth - 32)
    const previewHeight = Math.min(240, window.innerHeight - 32)
    const offset = 20
    const left = event.clientX + previewWidth + offset > window.innerWidth
      ? event.clientX - previewWidth - offset
      : event.clientX + offset
    const top = event.clientY + previewHeight + offset > window.innerHeight
      ? event.clientY - previewHeight - offset
      : event.clientY + offset

    x.set(Math.max(16, left))
    y.set(Math.max(16, top))
  }

  const showPreviewOnHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

  return (
  <section id="certifications" aria-labelledby="certifications-heading" onMouseMove={handleMouseMove} className="relative c-space section-spacing">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id="certifications-heading" className="text-heading">Certifications</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          A selection of my completed training and credentials.
        </p>
      </div>

      <a
        href="/assets/certificates/EliTwaine_cv_og.pdf"
        download="Elijah-Twaine-Marquez-Resume.pdf"
        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
          <path d="M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
        Download resume
      </a>
    </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {certificates.map((certificate, index) => (
        <a
          key={certificate.href}
          href={certificate.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${certificate.title} certificate in a new tab`}
          onMouseEnter={() => { if (showPreviewOnHover()) setPreview(certificate) }}
          onMouseLeave={() => setPreview(null)}
          className="group flex min-h-36 flex-col rounded-2xl border border-white/10 bg-[#101014] p-5 transition duration-200 hover:-translate-y-1 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua"
        >
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Certificate {String(index + 1).padStart(2, '0')}
          </span>
          <div className="relative mt-3 flex flex-1 items-center justify-start">
            <h3 className="pr-7 text-left text-xl font-semibold leading-snug text-neutral-100 sm:text-2xl">{certificate.title}</h3>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute right-0 h-5 w-5 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </div>
        </a>
      ))}
    </div>
    {preview && (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-60 w-80 max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-white/15 bg-white p-1 shadow-2xl"
        style={{ x: springX, y: springY }}
      >
        <iframe
          key={preview.href}
          title={`${preview.title} certificate preview`}
          src={`${preview.href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          className="h-full w-full rounded-lg bg-white"
        />
      </motion.div>
    )}
  </section>
  )
}

export default Certifications
