import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import AboutPage from './components/About';
import Hero from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Projects';
import Home from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;