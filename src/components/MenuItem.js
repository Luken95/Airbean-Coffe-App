import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../actions/cartAction';

function MenuItem(props) {
  const { menuItem } = props;
  const dispatch = useDispatch();

  function addToStore() {
    console.log(menuItem);
    dispatch(addCartItem(menuItem));
  }

  return (
    <section onClick={ addToStore }>
      <p>-----</p>
      <p>{ menuItem.title }</p>
      <p>{ menuItem.desc }</p>
      <p>{ menuItem.price }kr</p>
    </section>
  )
}

export default MenuItem;
