import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Week1 from './Pages/Week1'
import Week2 from './Pages/Week2'

function App() {

  return (
    <>
      <div className='min-h-[100vh] bg-pink-200'>        
        <Week1 />
        <Background number={1}/>
      </div> 
    </>
  )
}

export default App
