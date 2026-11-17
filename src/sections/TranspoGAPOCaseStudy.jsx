const TranspoGAPOCaseStudy = () => (
  <section id="transpogapo-case-study" className="c-space section-spacing scroll-mt-24">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[.22em] text-neutral-400">Case Study · Team Haraya</p>
        <h2 className="text-heading">TranspoGAPO</h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 sm:text-2xl">
          Local journeys, made clearer.
        </p>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          A student-built transportation guide that brings Olongapo City routes, terminals, and local destinations together to help people plan their trips.
        </p>
        <a href="https://transpogapo.web.app" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10">
          Open TranspoGAPO <span aria-hidden="true">↗</span>
        </a>
      </div>

      <img
        src="/assets/projects/transpogapo.png"
        alt="TranspoGAPO transportation guide project preview"
        className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
      />
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">The challenge</p>
        <h3 className="text-xl font-semibold text-white">Make local transport information easier to find</h3>
        <p className="mt-4 leading-7 text-neutral-400">
          TranspoGAPO brings route, terminal, and destination information into one guide, giving residents and visitors a clearer starting point for getting around Olongapo City.
        </p>
      </article>
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Project overview</p>
        <dl className="space-y-4">
          <div>
            <dt className="text-sm text-neutral-500">Project</dt>
            <dd className="mt-1 text-neutral-200">Student-built transportation guide for Olongapo City</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Team</dt>
            <dd className="mt-1 text-neutral-200">Team Haraya</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">My role</dt>
            <dd className="mt-1 text-neutral-200">Design &amp; Architecture Lead / QA &amp; Testing Support</dd>
          </div>
        </dl>
      </article>
    </div>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Design &amp; architecture</p>
        <h3 className="text-xl font-semibold text-white">I designed the website across the experience</h3>
        <p className="mt-4 leading-7 text-neutral-400">
          As Design &amp; Architecture Lead, I designed the website and shaped its structure. The experience organizes trip discovery around Routes, Terminals, Spots, and a route-planning flow. I also supported quality assurance and testing.
        </p>
      </article>
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Recognition</p>
        <ul className="space-y-4 leading-7 text-neutral-300">
          <li>Recognized as a main stakeholder by the Olongapo City Tourism Office.</li>
          <li>Regional Top 20 finalist in the Philippines Startup Challenge, representing Zambales.</li>
        </ul>
      </article>
    </div>

    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
      <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Lesson learned</p>
      <p className="max-w-4xl text-lg leading-8 text-neutral-300">
        A useful city transport guide needs to connect the route, the terminal, and the destination. Keeping those pieces together gives people a more direct way to understand a local journey.
      </p>
    </div>

    <p className="mt-8 text-sm text-neutral-500">Elijah Twaine Marquez · Design &amp; Architecture Lead / QA &amp; Testing Support</p>
  </section>
)

export default TranspoGAPOCaseStudy
