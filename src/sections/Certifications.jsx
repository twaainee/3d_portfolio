import { useEffect, useState } from 'react'
import OptionWheel from '../components/OptionWheel'

const certificates = [
  {
    title: 'HTML Essentials',
    category: 'Web foundations',
    label: 'HTML Essentials',
    preview: '/assets/certificate-previews/HTML_Essentials_certificate_twainemarquez-gmail-com_306c1555-b39a-4983-b0f5-f858eee5258d.jpg',
    href: '/assets/certificates/HTML_Essentials_certificate_twainemarquez-gmail-com_306c1555-b39a-4983-b0f5-f858eee5258d.pdf',
  },
  {
    title: 'CSS Essentials',
    category: 'Web foundations',
    label: 'CSS Essentials',
    preview: '/assets/certificate-previews/CSS_Essentials_certificate_twainemarquez-gmail-com_49b1ad56-e211-4363-a94b-9a1e11e505ff.jpg',
    href: '/assets/certificates/CSS_Essentials_certificate_twainemarquez-gmail-com_49b1ad56-e211-4363-a94b-9a1e11e505ff.pdf',
  },
  {
    title: 'Python Essentials 1',
    category: 'Programming',
    label: 'Python I',
    preview: '/assets/certificate-previews/Python_Essentials_1_certificate_202411385-gordoncollege-edu-ph_d841f0e5-88a2-4929-ba5a-e422a12bc52f.jpg',
    href: '/assets/certificates/Python_Essentials_1_certificate_202411385-gordoncollege-edu-ph_d841f0e5-88a2-4929-ba5a-e422a12bc52f.pdf',
  },
  {
    title: 'Python Essentials 2',
    category: 'Programming',
    label: 'Python II',
    preview: '/assets/certificate-previews/Python_Essentials_2_certificate_202411385-gordoncollege-edu-ph_4b32d6f2-7ac3-4c09-82de-492806040838.jpg',
    href: '/assets/certificates/Python_Essentials_2_certificate_202411385-gordoncollege-edu-ph_4b32d6f2-7ac3-4c09-82de-492806040838.pdf',
  },
  {
    title: 'Fortinet NSE 1: Certified in Cybersecurity',
    category: 'Cybersecurity',
    label: 'Cybersecurity',
    preview: '/assets/certificate-previews/Fortinet-NSE-1-Certified-in-Cybersecurity.jpg',
    href: '/assets/certificates/Fortinet-NSE-1-Certified-in-Cybersecurity.pdf',
  },
  {
    title: 'Introduction to Data Privacy',
    category: 'Data privacy',
    label: 'Data privacy',
    preview: '/assets/certificate-previews/intro_to_data_privacy.jpg',
    href: '/assets/certificates/intro_to_data_privacy.pdf',
  },
  {
    title: 'Data Privacy and Good Governance',
    category: 'Data privacy',
    label: 'Privacy & Gov.',
    preview: '/assets/certificate-previews/data_privacy-good_governance.jpg',
    href: '/assets/certificates/data_privacy-good_governance.pdf',
  },
  {
    title: 'Visual Graphics Design NC III',
    category: 'Graphic design',
    label: 'Visual design',
    preview: '/assets/certificate-previews/NC.jpg',
    href: '/assets/certificates/NC.pdf',
  },
]

const certificateOptions = certificates.map(({ label }) => label)

const Certifications = () => {
  const [selectedIndex, setSelectedIndex] = useState(3)
  const [mobileCertificateOpen, setMobileCertificateOpen] = useState(false)
  const [wheelFontSize, setWheelFontSize] = useState(() => {
    if (typeof window === 'undefined') return 2.5
    if (window.innerWidth < 360) return 1.7
    if (window.innerWidth < 480) return 1.9
    if (window.innerWidth < 1024) return 2.3
    return 3
  })
  const [wheelSpacing, setWheelSpacing] = useState(() => {
    if (typeof window === 'undefined') return 1.4
    if (window.innerWidth < 480) return 1.7
    if (window.innerWidth < 1024) return 1.6
    return 1.4
  })
  const selectedCertificate = certificates[selectedIndex]

  useEffect(() => {
    certificates.forEach(({ preview: previewImage }) => {
      const image = new Image()
      image.decoding = 'async'
      image.fetchPriority = 'high'
      image.src = previewImage
      image.decode?.().catch(() => {})
    })
  }, [])

  useEffect(() => {
    const updateWheelSize = () => {
      setWheelFontSize(window.innerWidth < 360 ? 1.7 : window.innerWidth < 480 ? 1.9 : window.innerWidth < 1024 ? 2.3 : 3)
      setWheelSpacing(window.innerWidth < 480 ? 1.7 : window.innerWidth < 1024 ? 1.6 : 1.4)
    }

    window.addEventListener('resize', updateWheelSize, { passive: true })
    return () => window.removeEventListener('resize', updateWheelSize)
  }, [])

  useEffect(() => {
    if (!mobileCertificateOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileCertificateOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [mobileCertificateOpen])

  return (
  <section id="certifications" aria-label="Certifications" className="relative c-space section-spacing">
    <div className="mb-5 flex items-center justify-between gap-3 lg:hidden sm:mb-7">
      <h2 id="mobile-certifications-heading" className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">Certifications</h2>
      <a
        href="/assets/certificates/EliTwaine_cv_og.pdf"
        download="Elijah-Twaine-Marquez-Resume.pdf"
        aria-label="Download resume"
        className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-white/15 bg-[#242424] px-2.5 py-2.5 text-[11px] font-medium text-white transition hover:border-white/35 hover:bg-[#303030] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:px-4 sm:text-sm"
      >
        <span className="sm:hidden">Resume</span>
        <span className="hidden sm:inline">Download resume</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
          <path d="M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
      </a>
    </div>

    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className="relative h-[calc(100svh-9rem)] min-h-[34rem] w-full self-center sm:min-h-[36rem] lg:h-[36rem] lg:min-h-0">
        <OptionWheel
          items={certificateOptions}
          defaultSelected={3}
          onChange={(index) => setSelectedIndex(index)}
          onItemClick={(index) => {
            setSelectedIndex(index)
            if (window.matchMedia('(max-width: 1023px)').matches) setMobileCertificateOpen(true)
          }}
          textColor="#a6a6a6"
          activeColor="#ffffff"
          side="left"
          fontSize={wheelFontSize}
          spacing={wheelSpacing}
          curve={1}
          tilt={6}
          blur={1.4}
          fade={0.22}
          smoothing={150}
          inset={40}
          draggable
          className="absolute inset-0 -translate-y-2 lg:-translate-y-7"
        />
      </div>

      <article className="relative hidden h-[40rem] flex-col border border-white/10 bg-[#101014] p-6 sm:h-[42rem] sm:p-8 lg:flex lg:h-[45rem] lg:p-10">
        <header>
          <div className="flex items-start justify-between gap-5">
            <h2 id="certifications-heading" className="text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              Certifications
            </h2>
            <p className="shrink-0 font-mono text-sm tracking-widest text-neutral-500" aria-label={`Certificate ${selectedIndex + 1} of ${certificates.length}`}>
              <span className="text-4xl font-light tracking-tight text-neutral-100 sm:text-5xl">{String(selectedIndex + 1).padStart(2, '0')}</span>
              <span className="ml-1">/{String(certificates.length).padStart(2, '0')}</span>
            </p>
          </div>
          <div className="mt-6 h-px w-full bg-white/10" />
        </header>

        <div className="mt-6 h-52 flex-none border border-white/10 bg-[#242424] p-2 sm:mt-7 sm:h-56 sm:p-3 lg:h-64">
          <img
            key={selectedCertificate.preview}
            src={selectedCertificate.preview}
            alt={`${selectedCertificate.title} certificate`}
            decoding="async"
            className="h-full w-full bg-white object-contain"
          />
        </div>

        <div className="mt-6 min-h-[9rem] flex-none border-l border-neutral-700 py-1 pl-5 sm:mt-7 sm:min-h-[9.5rem] sm:pl-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">{selectedCertificate.category}</p>
          <h3 className="mt-4 min-h-[6rem] max-w-xl line-clamp-3 text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:min-h-[7.5rem] sm:text-4xl">
            {selectedCertificate.title}
          </h3>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
          <a
            href={selectedCertificate.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-12 items-center gap-3 text-sm font-semibold text-white underline decoration-white/25 underline-offset-8 transition hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Open certificate
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4h6v6M20 4 10 14" />
              <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
            </svg>
          </a>
          <a
            href="/assets/certificates/EliTwaine_cv_og.pdf"
            download="Elijah-Twaine-Marquez-Resume.pdf"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 bg-[#242424] px-4 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-[#303030] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:px-5"
          >
            Download resume
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
              <path d="M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
            </svg>
          </a>
        </div>
      </article>
    </div>
    {mobileCertificateOpen && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 lg:hidden"
        onClick={(event) => {
          if (event.target === event.currentTarget) setMobileCertificateOpen(false)
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-dialog-title"
          className="relative max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto border border-white/15 bg-[#101014] p-4 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">{selectedCertificate.category}</p>
              <h2 id="certificate-dialog-title" className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">{selectedCertificate.title}</h2>
            </div>
            <button
              type="button"
              autoFocus
              aria-label="Close certificate"
              onClick={() => setMobileCertificateOpen(false)}
              className="grid size-11 shrink-0 place-items-center border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 border border-white/10 bg-[#242424] p-2 sm:mt-6 sm:p-3">
            <img
              src={selectedCertificate.preview}
              alt={`${selectedCertificate.title} certificate`}
              decoding="async"
              className="max-h-[55dvh] w-full bg-white object-contain"
            />
          </div>

          <a
            href={selectedCertificate.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Open full certificate
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4h6v6M20 4 10 14" />
              <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
            </svg>
          </a>
        </div>
      </div>
    )}
  </section>
  )
}

export default Certifications
