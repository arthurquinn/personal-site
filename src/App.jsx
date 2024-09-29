import { useState } from 'react'
import './App.css'

import { Button } from '@nextui-org/react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
