import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/Home';
import Contact from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
    <div>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectGallery/*" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
