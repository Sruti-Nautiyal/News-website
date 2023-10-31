import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/general" element={<FetchData cat="GENERAL" />} />
          <Route exact path="/health" element={<FetchData cat="HEALTH" />} />
          <Route exact path="/technology" element={<FetchData cat="TECHNOLOGY" />} />
          <Route exact path="/entertainment" element={<FetchData cat="ENTERTAINMENT" />} />
          <Route exact path="/global" element={<FetchData cat="GLOBAL" />} />
          <Route exact path="/sports" element={<FetchData cat="SPORTS" />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App

