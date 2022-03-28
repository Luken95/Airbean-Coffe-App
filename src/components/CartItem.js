import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../actions/cartAction';

function CartItem(props) {
  const { cartItem, thisId, quantity } = props
  const dispatch = useDispatch();

function addItem(){
  dispatch(addCartItem(cartItem));
}

function subtractItem(){
  dispatch(removeCartItem(cartItem));
}
  return (
    <section>
    <p>{quantity}</p>
    <p>{cartItem.title}</p>
    <p>{quantity*cartItem.price}kr</p>
    <button onClick={ addItem }>add one</button>
    <button onClick={ subtractItem }>remove one</button>
    </section>
  )
}

export default CartItem;
