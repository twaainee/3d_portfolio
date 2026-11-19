const users = [
  ['Yoga beginners', 'People learning poses without an instructor to check their form.'],
  ['Home practitioners', 'People practicing alone who want private, immediate feedback.'],
  ['College students', 'Budget-conscious users looking for accessible wellness support.'],
  ['Remote and provincial users', 'People without nearby yoga studios who can use a browser and camera.'],
]

const lessons = [
  ['Angle calculations', 'A front-facing camera can distort pose angles. Switching to a dot-product cosine calculation made the evaluation more reliable.'],
  ['Score smoothing', 'Seeding the score with a fixed value made the first reading misleading. Starting from the first actual pose detection fixed this.'],
  ['Session timing', 'The timer needed a pose-lock rule: alignment must stay above 45% for five consecutive frames before time accumulates.'],
  ['Mobile layouts', 'Using dynamic viewport height helped the interface fit mobile browsers with changing browser controls.'],
]

const AccordionSection = ({ title, children }) => (
  <details className="group rounded-2xl border border-white/10 bg-white/[.035] open:bg-white/[.05]">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
      <span className="text-lg font-semibold text-white sm:text-xl">{title}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180"
      >
        <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </summary>
    <div className="border-t border-white/10 px-5 py-6 text-neutral-300 sm:px-6">
      {children}
    </div>
  </details>
)

const FlowBuddyCaseStudy = () => (
  <section id="flowbuddy-case-study" className="c-space section-spacing scroll-mt-24">
    <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
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

    <div className="mt-10 space-y-3">
      <AccordionSection title="01 · Project overview">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-neutral-500">Project</p>
            <p className="mt-1">Browser-based yoga pose detection and form correction assistant</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Author and role</p>
            <p className="mt-1">Elijah Twaine Marquez · Solo student project covering planning, UI/UX, frontend, AI integration, QA, and documentation</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Project dates</p>
            <p className="mt-1">January–May 2026</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Technology</p>
            <p className="mt-1">HTML, CSS, JavaScript, and MediaPipe Pose</p>
          </div>
        </div>
        <p className="mt-6 leading-7 text-neutral-400">
          The goal was to make basic yoga form guidance more accessible through a free browser app that works with a webcam, processes pose data on-device, and can keep session history locally.
        </p>
      </AccordionSection>

      <AccordionSection title="02 · Problem and target users">
        <p className="max-w-4xl leading-7 text-neutral-400">
          Beginners and people practicing at home may not have an instructor available to correct their form. FlowBuddy explores whether a standard webcam and browser-based pose detection can provide immediate guidance without sending video to the cloud.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {users.map(([name, detail]) => (
            <div key={name}>
              <h3 className="font-semibold text-white">{name}</h3>
              <p className="mt-2 leading-6 text-neutral-400">{detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-neutral-500">
          These are the intended user groups listed in the project documentation. It does not report interviews or a formal usability study, so no research findings are claimed here.
        </p>
      </AccordionSection>

      <AccordionSection title="03 · User research and insights">
        <p className="max-w-4xl leading-7 text-neutral-400">
          The technical report identifies yoga beginners, people practicing at home, college students, and people far from yoga studios as intended users. It records setup research and technical validation, but no participant interviews or formal usability study. The following needs are a desk-based synthesis of the product brief and intended audiences, not reported user-test findings.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white">Need immediate guidance</h3>
            <p className="mt-2 leading-6 text-neutral-400">A beginner practicing alone may not know what to adjust when a pose feels wrong.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Practice at home</h3>
            <p className="mt-2 leading-6 text-neutral-400">A webcam-based session can make basic feedback available without a studio or instructor present.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Keep camera use private</h3>
            <p className="mt-2 leading-6 text-neutral-400">Because practice uses a camera, users need a clear explanation of what is processed and where it goes.</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-white/10 p-5">
          <p className="text-sm uppercase tracking-[.14em] text-neutral-500">Illustrative persona · design hypothesis</p>
          <h3 className="mt-2 font-semibold text-white">Mika, a first-time home practitioner</h3>
          <p className="mt-2 max-w-4xl leading-6 text-neutral-400">Mika wants to practice a few foundational poses with a laptop camera, get one clear correction at a time, and know that the video stays on the device. This persona is a planning tool, not a real participant.</p>
        </div>
        <p className="mt-5 text-neutral-300">Design implications: offer a small set of pose choices, pair color feedback with plain-language tips, and make the on-device privacy behavior visible.</p>
      </AccordionSection>

      <AccordionSection title="04 · Process and responsibilities">
        <p className="max-w-4xl leading-7 text-neutral-400">
          This was a solo project. I planned the work, designed the interface, built the frontend, integrated MediaPipe, tested the application, and prepared the technical documentation. Work was organized into short Scrum-style iterations: setup and research, interface layout, core features, polish and fixes, then additional features and delivery.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Planning & research', 'UI/UX design', 'Frontend development', 'AI integration', 'QA & testing', 'Technical writing'].map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-300">{item}</span>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection title="05 · Solution and interaction flow">
        <p className="max-w-4xl leading-7 text-neutral-400">
          MediaPipe Pose detects 33 body landmarks from the camera feed. FlowBuddy calculates joint angles and checks them against thresholds for Mountain Pose, Downward Dog, and Warrior I. A green, yellow, or red skeleton and short correction tips communicate form feedback while the user practices.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">Practice flow</h3>
            <p className="mt-2 leading-6 text-neutral-400">Camera permission → choose a pose → see alignment and correction tips → hold the pose to advance the timer → review the session summary.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Supporting features</h3>
            <p className="mt-2 leading-6 text-neutral-400">Person-in-frame detection, a smoothed 0–100 alignment score, a pose-lock timer, and a progress dashboard stored in localStorage.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="06 · Testing and outcome">
        <p className="max-w-4xl leading-7 text-neutral-400">
          The technical report records testing on Windows 11 with Chrome, Firefox, and Edge, and on Android with Chrome. It marks the application complete, including three-pose detection, feedback, session summaries, local progress tracking, privacy information, and responsive layouts.
        </p>
        <p className="mt-4 max-w-4xl leading-7 text-neutral-400">
          Reported limitations include lower detection accuracy in poor lighting or very loose, dark clothing, reduced frame rates on low-end phones, and no audio feedback. The report gives no user adoption or outcome metrics.
        </p>
      </AccordionSection>

      <AccordionSection title="07 · Privacy and accessibility">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">Privacy</h3>
            <p className="mt-2 leading-6 text-neutral-400">Pose processing runs in the browser. The camera video and pose landmarks are not sent to a server. Session history stays in the browser’s local storage.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Access across devices</h3>
            <p className="mt-2 leading-6 text-neutral-400">The app is designed for desktop, tablet, and mobile browsers. It requires a camera and currently has no voice guidance; it is an educational tool, not a medical device.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="08 · Lessons learned and next steps">
        <div className="grid gap-5 sm:grid-cols-2">
          {lessons.map(([name, detail]) => (
            <div key={name}>
              <h3 className="font-semibold text-white">{name}</h3>
              <p className="mt-2 leading-6 text-neutral-400">{detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-white/10 pt-5">
          <h3 className="font-semibold text-white">Next steps</h3>
          <p className="mt-2 leading-6 text-neutral-400">Expand the pose library, add optional voice cues, and explore opt-in cross-device progress sync. These are recommendations from the project report, not completed features.</p>
        </div>
      </AccordionSection>
    </div>

    <p className="mt-8 text-sm text-neutral-500">Elijah Twaine Marquez · Solo student project</p>
  </section>
)

export default FlowBuddyCaseStudy
