import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from "./pages/Home.jsx"
import Createnote from "./pages/Createnote.jsx"
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Createnote/>}/>
      </Routes>
    </main>
      <Footer/>
    </div>
  )
}

export default App