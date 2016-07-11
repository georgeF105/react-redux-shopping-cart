import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.find(cartItem => {return cartItem.get('id') == p.get('id')})
    }).map(p => {return p.set('qyt', this.props.cart.find(cartItem => {return cartItem.get('id') == p.get('id')}).get('qyt'))})
    
    console.log('cart', this.props.cart.toJS())
    console.log('cart product1',products.toJS())
    // products.map(p => {return p.set({'qyt', this.props.cart.get('id')})})
    console.log('cart product2',products.toJS())
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('name')} Qyt: {product.get('qyt')}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
