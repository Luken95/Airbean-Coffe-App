const addCartItem = (cartItem) =>{
  return {
    type: 'ADD_CART_ITEM',
    payload: cartItem
  }
}

const removeCartItem = (cartItem) =>{
  return {
    type: 'REMOVE_CART_ITEM',
    payload: cartItem
  }
}

export { addCartItem, removeCartItem }
