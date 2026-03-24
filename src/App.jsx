

//Import the routing modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

//Import our app's various components
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import QuickBites from './components/QuickBites';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Implement routing */}
      <Router>
        <div className='container-fluid'>
          {/* Add a navigation bar */}
          <nav id='main-nav'>
            <button id='menu-toggle' className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/quickbites">Quick Bites</Link></li>
            </ul>
          </nav>
          {/* Routes for the individual pages/components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quickbites" element={<QuickBites />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
