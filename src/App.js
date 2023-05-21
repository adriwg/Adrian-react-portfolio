import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'

library.add(fab, faEnvelope, faDownload);

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
