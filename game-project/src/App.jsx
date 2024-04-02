import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/Home'
import { Header } from './Components/Header'
import './App.css'

function App() {


  return (
    <div className='dark:bg-[#151515]'>

    <Header/>
      <Home/>
      
    </div>
  )
}

export default App
