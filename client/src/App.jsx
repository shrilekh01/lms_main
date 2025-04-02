import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ul>
    <li className='bg-red-400'>Shrilekh</li>
    <li className='bg-orange-400'>Devanshu</li>
    <li className='bg-purple-400'>Pranjali</li>
   </ul>
   </>
  )
}

export default App
