import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-blue-700 h-screen w-screen flex justify-center items-center ' >
      <p className='text-red-400 text-xl' >
        Vite React 
      </p>
    </div>
  )
}

export default App
