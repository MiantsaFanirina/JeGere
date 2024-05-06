import React from 'react'

// Router
import {Routes, Route} from 'react-router-dom' 

// Global Styling
import './App.css'

// pages
import Sign from "./pages/Sign/Sign"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route index path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
