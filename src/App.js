import React from 'react'


//react router dom v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components
import NavbarPage from './components/NavbarPage'
import LandingPage from './components/LandingPage'
import MovieIndex from './components/MovieIndex'
import Footer from './components/Footer'





const App = () => {

  return (
    <BrowserRouter>
    {/* NAV */}
      <NavbarPage />
      
      <Routes>
        {/* landing page */}
        <Route path='/' element={<LandingPage />} />
        {/* movie index */}
        <Route path='/movies' element={<MovieIndex />} />
        
      </Routes>
      
      <Footer />
    </BrowserRouter>

  )
}

export default App
