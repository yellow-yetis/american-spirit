import React from 'react';
import { Link } from 'react-router-dom';
// import Video from './components/video/Blantons.mp4'



function HeroSection() {
	return (
		<div className='hero-container'>
			{/* <video src={Video} autoPlay loop muted /> */}
			<h1>New Arrival!</h1>
			<p>Blanton's Single Barrel Bourbon Whiskey</p>
      <Link to={`/products/27`}>
      <button className='cta'>Order Now!</button>
      </Link>
		</div>
	)}

export default HeroSection;
