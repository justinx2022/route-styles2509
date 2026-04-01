

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
import Menu from './components/Menu';

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
              <li><a href="#">Menu</a>
                <ul>
                  <li><Link to="/menu/pizzas">  Pizzas</Link></li>
                  <li><Link to="/menu/pasta">Pasta</Link></li>
                  <li><Link to="/menu/salads">Salads</Link></li>
                  <li><Link to="/menu/drinks">Drinks</Link></li>
                </ul>
              </li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/quickbites">Quick Bites</Link></li>
              <li><Link to="/menu">Menu</Link></li>
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
