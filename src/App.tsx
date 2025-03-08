import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="app__logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="app__logo app__logo-react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="app__card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="app__read-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
