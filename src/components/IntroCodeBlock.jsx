import { CodeBlock } from '@animate-ui/react/primitives/code-block'
import '../styles/ComponentCSS/IntroCodeBlock.css'

const chatRoute = `import React from "react"

const Intro = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to my portfolio.</p>
    </div>
  )
}

export default Intro`

const IntroCodeBlock = () => {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(chatRoute)
    } catch {
      // Clipboard access may be unavailable outside secure browser contexts.
    }
  }

  return (
    <div className="intro-code-card">
      <div className="intro-code-editor">
        <div className="intro-code-file">
          <div className="intro-code-file-name">
            <svg
              className="intro-code-file-icon"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M4 1.75h5l3.25 3.3v8.2A.75.75 0 0 1 11.5 14h-7a.75.75 0 0 1-.75-.75v-10a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" strokeWidth="1.3" />
              <path d="M9 2v3.25h3.2M6.4 8 5.2 9.2l1.2 1.2m3.2-2.4 1.2 1.2-1.2 1.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
              Intro.jsx
          </div>
          <div className="intro-code-actions">
            <a
              className="intro-code-action"
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(chatRoute)}`}
              download="Intro.jsx"
              aria-label="Download Intro.jsx"
              title="Download code"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="M8 2.25v7m0 0 2.5-2.5M8 9.25l-2.5-2.5M3 11.25v1.5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              className="intro-code-action"
              type="button"
              onClick={copyCode}
              aria-label="Copy code"
              title="Copy code"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <rect x="5.25" y="2.25" width="8" height="9.5" rx="1.25" stroke="currentColor" strokeWidth="1.3" />
                <path d="M10.75 11.75v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <CodeBlock
          className="intro-code-snippet"
          code={chatRoute}
          lang="typescript"
          theme="dark"
          writing
          duration={2200}
          delay={250}
          inView
          inViewOnce
        />
      </div>
    </div>
  )
}

export default IntroCodeBlock
