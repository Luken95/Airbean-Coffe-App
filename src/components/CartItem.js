function CartItem(props) {
  const { cartItem, thisId, quantity } = props

  return (
    <section>
    <p>{quantity}</p>
    <p>{cartItem.title}</p>
    <p>-----</p>
    </section>
  )
}

export default CartItem;
