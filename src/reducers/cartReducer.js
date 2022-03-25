const initialState = {
  cart: []
}
let counter = 0;

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CART_ITEM':
    counter++;
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: counter,
          cartItem: action.payload
        }
      ]
    }
    default :
    return state;
  }

}


export default cartReducer;
