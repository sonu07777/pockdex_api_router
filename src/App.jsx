import { useState } from 'react'
import Pockedex from './Component/Pockedex/Pockdex.jsx'
import PockmonList from './Component/PockmonList/PockmonList.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pockedex/>
      <PockmonList/>
    </>
  )
}

export default App
