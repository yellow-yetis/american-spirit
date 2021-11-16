import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>The Tipsy New Yorker</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to='/home'>Home</Link>
          <Link to='/products'>All Products</Link>
          <Link to='/categories/Vodka'>Vodka</Link>
          <Link to='/categories/Gin'>Gin</Link>
          <Link to='/categories/Tequila'>Tequila</Link>
          <Link to='/categories/Mezcal'>Mezcal</Link>
          <Link to='/categories/Rum'>Rum</Link>
          <Link to='/categories/Whiskey'>Whiskey</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
          <Link to='/cart'>Cart</Link>
          <Link to='/admin'>Admin</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to='/products'>All Products</Link>
          <Link to='/categories/Vodka'>Vodka</Link>
          <Link to='/categories/Gin'>Gin</Link>
          <Link to='/categories/Tequila'>Tequila</Link>
          <Link to='/categories/Mezcal'>Mezcal</Link>
          <Link to='/categories/Rum'>Rum</Link>
          <Link to='/categories/Whiskey'>Whiskey</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/cart'>Cart</Link>
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
