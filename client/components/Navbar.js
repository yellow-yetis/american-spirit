import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav className='navbar'>
      {isLoggedIn ? (
        <div className='navbar-container'>
          {/* The navbar will show these links after you log in */}
          <Link to='/home' className='navbar-logo'>
            Tipsy New Yorker <i className='fab fa-typo3' />
            </Link>
          <Link to='/products' className='nav-links'>Shop All</Link>
          <Link to='/categories/Vodka' className='nav-links'>Vodka</Link>
          <Link to='/categories/Gin' className='nav-links'>Gin</Link>
          <Link to='/categories/Tequila' className='nav-links'>Tequila</Link>
          <Link to='/categories/Mezcal' className='nav-links'>Mezcal</Link>
          <Link to='/categories/Rum' className='nav-links'>Rum</Link>
          <Link to='/categories/Whiskey' className='nav-links'>Whiskey</Link>
          <a href='#' onClick={handleClick} className='nav-links'>
            Logout
          </a>
          <Link to='/cart' className='nav-links'>Cart</Link>
          <Link to='/users' className='nav-links'>Admin</Link>
        </div>
      ) : (
        <div className='navbar-container'>
          {/* The navbar will show these links before you log in */}
          <Link to='/' className='navbar-logo'>
            Tipsy New Yorker <i className='fab fa-typo3' />
            </Link>
          <Link to='/products' className='nav-links'>Shop All</Link>
          <Link to='/categories/Vodka' className='nav-links'>Vodka</Link>
          <Link to='/categories/Gin' className='nav-links'>Gin</Link>
          <Link to='/categories/Tequila'className='nav-links'>Tequila</Link>
          <Link to='/categories/Mezcal' className='nav-links'>Mezcal</Link>
          <Link to='/categories/Rum' className='nav-links'>Rum</Link>
          <Link to='/categories/Whiskey' className='nav-links'>Whiskey</Link>
          <Link to='/login' className='nav-links'>Login</Link>
          <Link to='/signup' className='nav-links'>Sign Up</Link>
          <Link to='/cart' className='nav-links'>Cart</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
