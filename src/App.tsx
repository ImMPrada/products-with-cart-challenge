import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <section className="app__section">
        <h1>Typography Showcase</h1>
        <p className="text--large">
          This is a showcase of all typography styles available in our design system.
        </p>
      </section>

      <section className="app__section">
        <h2>Headings</h2>
        <h1>H1 - Main Heading</h1>
        <h2>H2 - Section Heading</h2>
        <h3>H3 - Subsection Heading</h3>
        <h4>H4 - Small Heading</h4>
        <h5>H5 - Tiny Heading</h5>
        <h6>H6 - Mini Heading</h6>
      </section>

      <section className="app__section">
        <h2>Text Styles</h2>
        <p>This is a regular paragraph with standard text size and weight.</p>
        <p className="text--large">This is large text, useful for important content.</p>
        <p className="text--small">This is small text, perfect for captions or notes.</p>
        <p className="text--bold">This text is bold, drawing attention to important information.</p>
        <p className="text--italic">This text is italic, great for emphasis or quotes.</p>
      </section>

      <section className="app__section">
        <h2>Interactive Elements</h2>
        <div className="app__card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </section>

      <section className="app__section">
        <h2>Links and References</h2>
        <div className="app__links">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="app__logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="app__logo app__logo-react" alt="React logo" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
