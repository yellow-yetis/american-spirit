import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

function Navbar({ handleClick, isLoggedIn }) {
  const [click, setClick] = useState(false);


  const handleMobile = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
  <>
  <div className='hr'>
    <nav className="navbar">
      {isLoggedIn ? (
        <div className="navbar-container">
          {/* The navbar will show these links after you log in */}
          <Link to="/home" className="navbar-logo">
            American Spirit <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleMobile}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
               Shop All
              </Link>
            </li>
             <li className="nav-item">
             <Link to="/categories/Vodka" className="nav-links" onClick={closeMobileMenu}>
               Vodka
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Gin" className="nav-links" onClick={closeMobileMenu}>
               Gin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Tequila" className="nav-links" onClick={closeMobileMenu}>
              Tequila
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Mezcal" className="nav-links" onClick={closeMobileMenu}>
                 Mezcal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Rum" className="nav-links" onClick={closeMobileMenu}>
                Rum
             </Link>
          </li>
          <li className="nav-item">
              <Link to="/categories/Whiskey" className="nav-links" onClick={closeMobileMenu}>
                Whiskey
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
              Admin
            </Link>
          </li>
          <li className="nav-item">
          <a href="#" onClick={handleClick} className="nav-links">
            Logout
          </a>
          </li>
        </ul>
        </div>
      ) : (
        <div className="navbar-container">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className="navbar-logo">
            American Spirit <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleMobile}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
               Shop All
              </Link>
            </li>
             <li className="nav-item">
             <Link to="/categories/Vodka" className="nav-links" onClick={closeMobileMenu}>
               Vodka
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Gin" className="nav-links" onClick={closeMobileMenu}>
               Gin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Tequila" className="nav-links" onClick={closeMobileMenu}>
              Tequila
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Mezcal" className="nav-links" onClick={closeMobileMenu}>
                 Mezcal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories/Rum" className="nav-links" onClick={closeMobileMenu}>
                Rum
             </Link>
          </li>
          <li className="nav-item">
              <Link to="/categories/Whiskey" className="nav-links" onClick={closeMobileMenu}>
                Whiskey
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
            </Link>
          </li>
          <li className="nav-item">
           <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
            Sign Up
          </Link>
          </li>
        </ul>
        </div>
        // <div className="navbar-container">
          /* The navbar will show these links before you log in */
          /* <Link to="/" className="navbar-logo">
            American Spirit <i className="fab fa-typo3" />
          </Link>
          <Link to="/products" className="nav-links">
            Shop All
          </Link>
          <Link to="/categories/Vodka" className="nav-links">
            Vodka
          </Link>
          <Link to="/categories/Gin" className="nav-links">
            Gin
          </Link>
          <Link to="/categories/Tequila" className="nav-links">
            Tequila
          </Link>
          <Link to="/categories/Mezcal" className="nav-links">
            Mezcal
          </Link>
          <Link to="/categories/Rum" className="nav-links">
            Rum
          </Link>
          <Link to="/categories/Whiskey" className="nav-links">
            Whiskey
          </Link>
          <Link to="/cart" className="nav-links">
            Cart
          </Link>
          <Link to="/login" className="nav-links">
            Login
          </Link>
          <Link to="/signup" className="nav-links">
            Sign Up
          </Link>

        </div> */
      )}
    </nav>
    <hr />
  </div>
  </>
  );
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
