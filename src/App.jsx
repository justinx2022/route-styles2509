

//Import the routing modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Import our app's various components
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import QuickBites from './components/QuickBites';
import Menu from './components/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outsie
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.getElementById('nav-menu');
      const menuToggle = document.getElementById('menu-toggle');

      if (navMenu && menuToggle &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Implement routing */}
      <Router>
        <div className='container-fluid'>
          {/* Navigation links */}
          <nav id='main-nav'>
            <button id="menu-toggle" aria-label="Toggle Menu"
              onClick={toggleMenu} className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
            </button>
            <ul id='nav-menu' className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><a href="#">Menu</a>
                <ul>
                  <li><Link to="/menu/pizzas" onClick={() => setIsMenuOpen(false)}>  Pizzas</Link></li>
                  <li><Link to="/menu/pasta" onClick={() => setIsMenuOpen(false)}>Pasta</Link></li>
                  <li><Link to="/menu/salads" onClick={() => setIsMenuOpen(false)}>Salads</Link></li>
                  <li><Link to="/menu/drinks" onClick={() => setIsMenuOpen(false)}>Drinks</Link></li>
                </ul>
              </li>
              <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link></li>
              <li><Link to="/quickbites" onClick={() => setIsMenuOpen(false)}>Quick Bites</Link></li>
              <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
            </ul>
          </nav>
          {/* Routes for the individual pages/components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quickbites" element={<QuickBites />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/*" element={<Menu />} />
            <Route path="/menu/pizzas" element={<Menu />} />
            <Route path="/menu/pasta" element={<Menu />} />
            <Route path="/menu/salads" element={<Menu />} />
            <Route path="/menu/drinks" element={<Menu />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
