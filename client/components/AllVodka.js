import React from 'react';
// import { fetchProducts } from '../store/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVodka } from '../store/vodka';



export class Vodka extends React.Component{
  componentDidMount(){
    console.log('This is my category: ', this.props.match.params.category);
    this.props.getVodka(this.props.match.params.category);

  }

  render(){
    return (
      <div>
        <h1>Vodka</h1>
        <div>
          <ul style={{listStyle: 'none'}}>
            {
            //  this.DummyVodka.map(product => {
              this.props.vodka.map(vodka => {
                return (
                  <li key={vodka.id}>
                    <div>
                      <h2><Link to={`/products/${vodka.id}`}>{vodka.name}</Link> - {vodka.category} - $ {vodka.price}</h2>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    vodka: state.vodka
  }
}

const mapDispatch = (dispatch) => {
  return {
    getVodka: (category) => dispatch(fetchVodka(category))
  }
}

export default connect(mapState, mapDispatch)(Vodka);
