import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Stocks from './components/Stocks'
import Facts from './components/Facts'
import Currency from './components/Currency'
import Hustles from './components/Hustles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hustles/>
    </>
  )
}

export default App
