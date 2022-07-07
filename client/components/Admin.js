import React from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';

export class Admin extends React.Component {
  render() {
    return (
      <div className='admin_cards'>
      <h1>Admin Tools for American Spirit</h1>
      <div className='admin_cards_container'>
        <div className='admin_cards_wrapper'>
         <ul className='admin_cards_items'>
            <CardItem
              src='https://zahiraccounting.com/en-my/wp-content/uploads/2015/10/zahir-accounting-software-have-more-than-60.000-users.png'
              text='View All Users'
              label='Users'
              path='/users'
              />
            <CardItem
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bottle-liquor-fine-craft-whiskey-bourbon-rum-royalty-free-image-1586968588.jpg?crop=1.00xw:0.752xh;0,0.0481xh&resize=1200:*'
            text='Create New Product'
            label='New Liquor'
            path='/admin/createproduct'
            />
            <CardItem
            src='https://static.dezeen.com/uploads/2018/11/bobs-select-liquor-store-design-reserve-beijing-interiors_dezeen_2364_col_10-852x639.jpg'
            text='Edit Products'
            label='Edit Liquor'
            path='/admin/products'
            />
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default connect(null, null)(Admin);
