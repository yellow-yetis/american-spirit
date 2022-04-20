import React from 'react';
import CardItem from './CardItem';



function Cards() {
	return (
		<div className='cards'>
			<h1>Check out Our Selection of Premium Liquors!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
						src='https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/07/7427-Martini.jpg?v=1-0'
            text='And remember, you can never go wrong with True Russian Vodka!'
						label='Vodka'
						path='/categories/Vodka'
						/>
            <CardItem
						src='https://www.thespruceeats.com/thmb/krxJBOwZoRNDliTyyl2SC-25wOE=/735x0/gin-tonic-5a8f334b8e1b6e0036a9631d.jpg'
						text='Its perfect time for some Gin & Tonic'
						label='Gin'
						path='/categories/Gin'
						/>
					</ul>
					<ul className='cards__items'>
          <CardItem
						src='https://cdn.shopify.com/s/files/1/0397/0079/1341/files/tequila_600x.jpg?v=1618535745'
						text='Cinco de Mayo Vibes!'
						label='Tequila'
						path='/categories/Tequila'
						/>
            <CardItem
						src='https://media.istockphoto.com/photos/mexican-mezcal-or-mescal-shot-with-chili-pepper-and-orange-picture-id1313412873?b=1&k=20&m=1313412873&s=170667a&w=0&h=l5I9jBVYPzcPbje0r9RPybhLQhDu3Ljnqgt0OT41zzU='
						text='For those who doesnt drink Tequila, but love Mezcal'
						label='Mezcal'
						path='/categories/Mezcal'
            />
						<CardItem
						src='https://cdn.shopify.com/s/files/1/0397/0079/1341/files/Whiskey1_600x.jpg?v=1616000808'
						text='Looking for Rum to make some Mojitos and Cuba Libre?'
						label='Rum'
						path='/categories/Rum'
						/>
            </ul>
            <ul className='cards__items'>
						<CardItem
						src='https://cdn.shopify.com/s/files/1/0397/0079/1341/files/rare-liquor-shop-pnline_900x.jpg?v=1618535987'
						text='Whether you like it neat or on-the-rocks, for Old Fashioneds or Manhattans we have some whiskey for you'
						label='Whiskey'
						path='/categories/Whiskey'
						/>
            <CardItem
						src='https://media.istockphoto.com/photos/bar-counter-picture-id1013044532?k=20&m=1013044532&s=612x612&w=0&h=TeDlkGvwmnlxYN1kMtAx0UTzlYD4algsZHUfFVabl7g='
						text='All in one place, for Your Convenience'
						label='All Liquors'
						path='/products'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
