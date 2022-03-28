const initialState = {
  cart: []
}
let counter = 0;


const cartReducer = (state = initialState, action) => {
  let addedQuantity = false;

  switch(action.type) {
    case 'ADD_CART_ITEM':
    const newArray = state.cart.filter((thisCartItem) =>{
      if (thisCartItem.id === action.payload.id){
        thisCartItem.quantity++;
        addedQuantity = true;
        return thisCartItem;
      }else{
        return thisCartItem;
      }
    });

    if(addedQuantity){
      return {
        ...state,
        cart: newArray
      }
    }else {

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
    }
    default :
    return state;
  }

}


export default cartReducer;
