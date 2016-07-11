import {fromJS} from 'immutable'


const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: [
    {id:1, qyt: 2},
    {id:3, qyt: 3}
  ]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      // console.log('cartItem qyt', state.get('cart').find( item => {return item.get('id') === action.id}))
      console.log('Old state', state.toJS())
      const newState = state.get('cart', state.get('cart').find( item => {return item.get('id') === action.id}) ? 
          state.get('cart').find( item => {return item.get('id') === action.id}).set('qyt', 5): null
        )
      console.log('New state', newState.toJS())

      return newState
    default:
      return state
  }
}


