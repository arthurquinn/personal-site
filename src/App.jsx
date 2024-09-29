import { useState } from 'react'
import './App.css'

import { Button } from '@nextui-org/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>HELLO WORLD</Button>
    </>
  )
}

export default App
