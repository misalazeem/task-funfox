import React from 'react'
import Background from './components/Background'
import './App.css'
import Week1 from './Pages/Week1'

function App() {

  return (
    <>
      <div className='min-h-[100vh] bg-background bg-cover bg-no-repeat'>
        <Background />
        <Week1 />
      </div> 
    </>
  )
}

export default App
