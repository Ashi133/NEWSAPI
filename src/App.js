import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import FetchData from './components/FetchData'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/general" element={<FetchData cat="general" />} />
        <Route path="/business" element={<FetchData cat="business" />} />
        <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
        <Route path="/health" element={<FetchData cat="health" />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
