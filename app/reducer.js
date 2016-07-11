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

      const exists = state.get('cart').findIndex( item => {return item.get('id') === action.id})
      console.log('exists', exists)
      let newState = {}
      if(exists >= 0){
        newState = state.setIn(['cart', exists, 'qyt'], state.getIn(['cart', exists, 'qyt']) + 1)
      }else{
        newState = state.set('cart', state.get('cart').push(fromJS({id:action.id,qyt:1})))
      }
      console.log('New state', newState.toJS())

      return newState
    default:
      return state
  }
}


