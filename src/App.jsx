import { useState } from 'react'
import { Routes, Route, Link, } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Services from './page/Services'
import NotFound from './page/NotFound'
function App({}) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App