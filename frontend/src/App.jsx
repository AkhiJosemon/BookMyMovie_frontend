import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/HomePage/Layout'
import Signup from './components/signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 <Layout></Layout>
    </>
  )
}

export default App
