const targetUsers = [
  ['Yoga beginners', 'People learning poses without an instructor to check their form.'],
  ['Home practitioners', 'People practicing alone who want private, immediate feedback.'],
  ['College students', 'Budget-conscious users looking for accessible wellness support.'],
  ['Remote and provincial users', 'People without nearby yoga studios who can use a browser and camera.'],
]

const lessons = [
  ['Angle calculations', 'A front-facing camera can distort pose angles. Switching to a dot-product cosine calculation made the evaluation more reliable.'],
  ['Score smoothing', 'Seeding the score with a fixed value made the first reading misleading. The score now starts from the first actual pose detection.'],
  ['Session timing', 'A pose-lock threshold gives the timer a clearer rule: the user must hold sufficient alignment across consecutive frames.'],
  ['Mobile layouts', 'Using dynamic viewport height helps the interface fit mobile browsers with changing browser chrome.'],
]

const FlowBuddyCaseStudy = () => (
  <section id="flowbuddy-case-study" className="c-space section-spacing scroll-mt-24">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[.22em] text-neutral-400">Case Study · Solo Student Project</p>
        <h2 className="text-heading">FlowBuddy</h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 sm:text-2xl">
          Real-time yoga guidance in the browser.
        </p>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          FlowBuddy uses MediaPipe Pose to check three foundational yoga poses and offer live form feedback. Pose processing stays on the user’s device, so camera video is not sent to a server.
        </p>
        <a href="https://flowbuddy.vercel.app" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10">
          Open FlowBuddy <span aria-hidden="true">↗</span>
        </a>
      </div>

      <img
        src="/assets/projects/flowbuddy.png"
        alt="FlowBuddy yoga assistant project preview"
        className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
      />
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">The challenge</p>
        <h3 className="text-xl font-semibold text-white">Make useful yoga form guidance more accessible</h3>
        <p className="mt-4 leading-7 text-neutral-400">
          Personal instruction can be difficult to access for people practicing at home, new to yoga, or far from a studio. FlowBuddy explores whether a standard webcam and browser-based pose detection can provide immediate guidance without sending video to the cloud.
        </p>
      </article>
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Project overview</p>
        <dl className="space-y-4">
          <div><dt className="text-sm text-neutral-500">Author</dt><dd className="mt-1 text-neutral-200">Elijah Twaine Marquez</dd></div>
          <div><dt className="text-sm text-neutral-500">Role</dt><dd className="mt-1 text-neutral-200">Solo student project: planning, UI/UX, frontend, AI integration, QA, and documentation</dd></div>
          <div><dt className="text-sm text-neutral-500">Technology</dt><dd className="mt-1 text-neutral-200">HTML, CSS, JavaScript, and MediaPipe Pose</dd></div>
        </dl>
      </article>
    </div>

    <article className="mt-5 rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
      <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Target users</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {targetUsers.map(([name, detail]) => (
          <div key={name}>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="mt-2 leading-6 text-neutral-400">{detail}</p>
          </div>
        ))}
      </div>
    </article>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Design &amp; technology</p>
        <h3 className="text-xl font-semibold text-white">Live feedback, processed on-device</h3>
        <p className="mt-4 leading-7 text-neutral-400">
          MediaPipe tracks 33 body landmarks. FlowBuddy evaluates joint angles for Mountain Pose, Downward Dog, and Warrior I, then pairs a color-coded skeleton with text tips. The session timer advances only after alignment stays above its threshold; completed sessions are saved in browser local storage.
        </p>
      </article>
      <article className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
        <p className="mb-3 text-sm uppercase tracking-[.16em] text-neutral-500">Outcome</p>
        <h3 className="text-xl font-semibold text-white">A complete, responsive web application</h3>
        <p className="mt-4 leading-7 text-neutral-400">
          The completed project includes live pose feedback, session summaries, local progress tracking, a privacy page, and a responsive interface. The technical report records testing on Windows browsers and Android Chrome. No user-study results or adoption metrics were reported.
        </p>
      </article>
    </div>

    <article className="mt-5 rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
      <p className="mb-5 text-sm uppercase tracking-[.16em] text-neutral-500">Lessons learned</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {lessons.map(([name, detail]) => (
          <div key={name}>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="mt-2 leading-6 text-neutral-400">{detail}</p>
          </div>
        ))}
      </div>
    </article>

    <p className="mt-8 text-sm text-neutral-500">Elijah Twaine Marquez · Solo student project</p>
  </section>
)

export default FlowBuddyCaseStudy
