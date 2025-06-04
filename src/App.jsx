import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import {Footer} from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Footer />
    </>

  )
}

export default App
