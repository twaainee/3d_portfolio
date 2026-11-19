const AccordionSection = ({ title, children }) => (
  <details className="group rounded-2xl border border-white/10 bg-white/[.035] open:bg-white/[.05]">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
      <span className="text-lg font-semibold text-white sm:text-xl">{title}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180">
        <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </summary>
    <div className="border-t border-white/10 px-5 py-6 text-neutral-300 sm:px-6">{children}</div>
  </details>
)

const TranspoGAPOCaseStudy = () => (
  <section id="transpogapo-case-study" className="c-space section-spacing scroll-mt-24">
    <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[.22em] text-neutral-400">Case Study · Team Haraya</p>
        <h2 className="text-heading">TranspoGAPO</h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 sm:text-2xl">Local journeys, made clearer.</p>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          A student-built transportation guide that brings Olongapo City routes, terminals, and local destinations together to help people plan their trips.
        </p>
        <a href="https://transpogapo.web.app" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10">
          Open TranspoGAPO <span aria-hidden="true">↗</span>
        </a>
      </div>
      <img src="/assets/projects/transpogapo.png" alt="TranspoGAPO transportation guide project preview" className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl" />
    </div>

    <div className="mt-10 space-y-3">
      <AccordionSection title="01 · Project overview">
        <div className="grid gap-6 sm:grid-cols-2">
          <div><p className="text-sm text-neutral-500">Product</p><p className="mt-1">Interactive transportation guide for Olongapo City</p></div>
          <div><p className="text-sm text-neutral-500">Team</p><p className="mt-1">Team Haraya</p></div>
          <div><p className="text-sm text-neutral-500">My role</p><p className="mt-1">Design &amp; Architecture Lead / QA &amp; Testing Support</p></div>
          <div><p className="text-sm text-neutral-500">My contribution</p><p className="mt-1">Designed the website and shaped its architecture</p></div>
        </div>
        <p className="mt-6 max-w-4xl leading-7 text-neutral-400">
          The site presents local routes, terminals, and points of interest, with a route-planning entry point. Its goal is to help residents and visitors understand how to get around the city.
        </p>
      </AccordionSection>

      <AccordionSection title="02 · Problem and target users">
        <p className="max-w-4xl leading-7 text-neutral-400">
          A traveler may need to piece together route, terminal, and destination information to plan a local trip. TranspoGAPO brings those parts into one place and makes them available through a map-based guide.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div><h3 className="font-semibold text-white">Olongapo residents and commuters</h3><p className="mt-2 leading-6 text-neutral-400">Need to find a route, identify a terminal or stop, and understand how to reach a destination.</p></div>
          <div><h3 className="font-semibold text-white">Visitors to Olongapo</h3><p className="mt-2 leading-6 text-neutral-400">May be unfamiliar with local routes and places and need a clear way to explore the city.</p></div>
        </div>
      </AccordionSection>

      <AccordionSection title="03 · User research and insights">
        <p className="max-w-4xl leading-7 text-neutral-400">
          This is a desk-based research synthesis created from the project's stated purpose and the live site's information structure. No interviews, surveys, or usability-study results were provided, so the personas and pain points below are design hypotheses rather than reported participant findings.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div><h3 className="font-semibold text-white">Routes need context</h3><p className="mt-2 leading-6 text-neutral-400">A route is more useful when travelers can also see the terminals, stops, and destinations connected to it.</p></div>
          <div><h3 className="font-semibold text-white">Visitors need orientation</h3><p className="mt-2 leading-6 text-neutral-400">People who are new to the city need an easy starting point for finding places and planning a journey.</p></div>
          <div><h3 className="font-semibold text-white">Local information should be easy to scan</h3><p className="mt-2 leading-6 text-neutral-400">Keeping transport and destination discovery under a small set of clear sections can reduce the effort to find the right information.</p></div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-5">
            <p className="text-sm uppercase tracking-[.14em] text-neutral-500">Illustrative persona · design hypothesis</p>
            <h3 className="mt-2 font-semibold text-white">A local commuter</h3>
            <p className="mt-2 leading-6 text-neutral-400">Knows where they need to go but wants to check which route and terminal to use before leaving.</p>
          </div>
          <div className="rounded-xl border border-white/10 p-5">
            <p className="text-sm uppercase tracking-[.14em] text-neutral-500">Illustrative persona · design hypothesis</p>
            <h3 className="mt-2 font-semibold text-white">A first-time visitor</h3>
            <p className="mt-2 leading-6 text-neutral-400">Wants to explore a local destination and needs help connecting it to the city's transport options.</p>
          </div>
        </div>
        <p className="mt-5 text-neutral-300">Design implications: organize the experience around Routes, Terminals, Spots, and Plan My Route; make connections between places and transport easy to follow; validate these assumptions with local travelers.</p>
      </AccordionSection>

      <AccordionSection title="04 · Role and process">
        <p className="max-w-4xl leading-7 text-neutral-400">
          As Design &amp; Architecture Lead, I designed the website and shaped its structure across the experience. I also supported QA and testing. I worked as part of Team Haraya; the case study separates my design and architecture work from the team's shared project recognition.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Site-wide design', 'Information architecture', 'Responsive experience', 'QA & testing support'].map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-300">{item}</span>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection title="05 · Solution and design approach">
        <p className="max-w-4xl leading-7 text-neutral-400">
          The website groups trip discovery into Routes, Terminals, and Spots, with Plan My Route as a direct path into trip planning. This structure keeps the key questions—where to go, where to board, and what to visit—close together.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Routes', 'Explore available local PUV routes.'],
            ['Terminals', 'Find key transport terminals.'],
            ['Spots', 'Discover local destinations.'],
            ['Plan My Route', 'Start planning a journey.'],
          ].map(([name, detail]) => (
            <div key={name}><h3 className="font-semibold text-white">{name}</h3><p className="mt-2 leading-6 text-neutral-400">{detail}</p></div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-500">Main technologies listed for the project include React, JavaScript, Tailwind CSS, Leaflet, and Supabase.</p>
      </AccordionSection>

      <AccordionSection title="06 · Outcome and recognition">
        <p className="max-w-4xl leading-7 text-neutral-400">
          TranspoGAPO is a live, student-built transportation guide. Team Haraya and the project were recognized by the Olongapo City Tourism Office as a main stakeholder, and the project was a regional Top 20 finalist in the Philippines Startup Challenge, representing Zambales.
        </p>
      </AccordionSection>

      <AccordionSection title="07 · Lessons and next steps">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><h3 className="font-semibold text-white">Design takeaway</h3><p className="mt-2 leading-6 text-neutral-400">A city transport guide needs to connect routes with terminals and destinations so people can understand a journey in context.</p></div>
          <div><h3 className="font-semibold text-white">Next step</h3><p className="mt-2 leading-6 text-neutral-400">Validate the research assumptions with local commuters and visitors, then refine labels and route-planning flows based on what they find difficult.</p></div>
        </div>
      </AccordionSection>
    </div>

    <p className="mt-8 text-sm text-neutral-500">Elijah Twaine Marquez · Design &amp; Architecture Lead / QA &amp; Testing Support</p>
  </section>
)

export default TranspoGAPOCaseStudy
