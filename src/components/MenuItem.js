function MenuItem(props) {
  const { menuItem } = props;


  return (
    <section>
      <p>-----</p>
      <p>{ menuItem.title }</p>
      <p>{ menuItem.desc }</p>
      <p>{ menuItem.price }kr</p>
    </section>
  )
}

export default MenuItem;
