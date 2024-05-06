import React from 'react'

// Router
import {Routes, Route} from 'react-router-dom' 

// Global Styling
import './App.css'

// pages
import Sign from "./pages/Sign/Sign"

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
      </Routes>
    </>
  )
}

export default App
