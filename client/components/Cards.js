import React from 'react';
import AllVodka from './AllVodka';
import AllGin from './AllGin';
import AllTequila from './AllTequila';
import AllWhiskey from './AllWhiskey';
import AllRum from './AllRum';
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
            {/* https://cdn.shopify.com/s/files/1/0397/0079/1341/files/vodka-shop-online_900x.jpg?v=1618535987 */}
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
						text='Feel like you are in Tulum!'
						label='Tequila'
						path='/categories/Tequila'
						/>
            <CardItem
						src='https://www.chowhound.com/a/img/resize/05dc2f2acb02d6dbebbb5dc0eb53cb5e6c1a2a97/2019/04/sal-de-gusado-worm-salt-mezcal-chowhound.jpg?fit=bounds&width=800'
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
						text='Our recomendations for your OldFashioneds and Manhattans'
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
