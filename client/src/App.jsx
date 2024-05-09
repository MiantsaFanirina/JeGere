import React from 'react'

// Router
import {Routes, Route} from 'react-router-dom' 

// Global Styling
import './App.css'

// pages
import Sign from "./pages/Sign/Sign"
import Home from "./pages/Home"
import Forum from "./pages/Forum"

// Layout
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/forum" element={<Forum/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
