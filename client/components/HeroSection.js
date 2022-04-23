import React from 'react';
import { Link } from 'react-router-dom';




function HeroSection() {
	return (
		<div className='hero-container'>
			{/* <video className="background-video" src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" autoPlay loop muted /> */}
			<video className="background-video" src="https://assets.codepen.io/2947671/finalblantons.mp4" type="video/mp4" autoPlay loop muted />
			<h1>New Arrival!</h1>
			<p>Blanton's Single Barrel Bourbon Whiskey</p>
      <Link to={`/products/27`}>
      <button className='cta'>Order Now!</button>
      </Link>
		</div>
	)}

export default HeroSection;
