import './CartItem.css'
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
    <section className="cartItemSection">
      <section className="titleSection">
      <p className="title">{cartItem.title}</p>
      <p className="price">{quantity*cartItem.price}kr</p>
      </section>
      <section className="quantitySection">
      <button className="quantityButton addButton" onClick={ addItem }>+</button>
      <p className="quantity">{quantity}</p>
      <button className="quantityButton removeButton" onClick={ subtractItem }>-</button>
      </section>
    </section>
  )
}

export default CartItem;
