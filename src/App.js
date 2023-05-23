import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'

library.add(fab, faEnvelope);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Header />
      <Routes>
        <Route path="/Adrian-react-portfolio" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
