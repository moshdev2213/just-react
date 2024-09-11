import { useState } from 'react'
import reactLogo from './assets/react.svg'
import azap from './assets/azas.png'
import azcr from './assets/azcr.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={azcr} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={azap} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ACR + AAS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me : {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Created In Order To Learn Azure Deployments
      </p>
      <p className="read-the-docs">
        made with ❤ <a target='_blank' href="https://github.com/moshdev2213">@moshdev2213</a>
      </p>
    </>
  )
}

export default App
