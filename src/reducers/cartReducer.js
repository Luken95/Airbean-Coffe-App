const initialState = {
  cart: []
}
let counter = 0;

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CART_ITEM':
    const newArray = state.cart.filter((cartItem) =>{
      if (cartItem.id === action.payload.id){
        cartItem.quantity++
      }else{
        return cartItem;
      }
      console.log(newArray);
    })

    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: action.payload.id,
          quantity: 1,
          cartItem: action.payload
        }
      ]
    }
    default :
    return state;
  }

}


export default cartReducer;
