function MenuItem(props) {
  const { menuItem } = props;

  function addToStore() {
    console.log(menuItem);
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
