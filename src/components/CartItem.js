function CartItem(props) {
  const { cartItem, thisId } = props

  return (
    <section>
    <p>{cartItem.title}</p>
    </section>
  )
}

export default CartItem;
