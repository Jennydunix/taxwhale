import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Pricing from './components/Pricing'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div>
        <NavBar />
        <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

            
    </div>
  )
}

export default App