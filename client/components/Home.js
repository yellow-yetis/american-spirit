import React from 'react';
import {connect} from 'react-redux';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Footer from './Footer';


/**
 * COMPONENT
 */
export const Home = props => {

  return (
    <div className='home'>
      <HeroSection />
      <Cards />
      <Footer />
      </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
