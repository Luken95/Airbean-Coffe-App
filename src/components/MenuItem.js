import styled from "styled-components";
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
    <MenuItemWrapper onClick={ addToStore }>
      {/* <p>-----</p> */}
      <div className="menuTitlePris-container">
      <p className="menuItemTitle">{ menuItem.title }</p>
      <p className="menuItemDesc" >{ menuItem.desc }</p>
      </div>
      <div>
      <p className="menuItemPris" >{ menuItem.price }kr</p>
      </div>
    </MenuItemWrapper>
  )
}

export default MenuItem;

const MenuItemWrapper = styled.section`
  max-width: 70%;
  position: relative;
  display: flex;
  transform: translate(20%);
  align-content: center;
  justify-content: space-around;
  flex-direction: column;
  transition: transform 200ms;
  cursor: pointer;

.menuTitlePris-container {
  display: flex; 
  align-items: left;
  
  .menuItemTitle {
  display: flex;
  font-weight: 700, Bold;
  font-size: x-large;
  align-content: start;


  .menuItemDesc {
  display: flex;
  align-content: end;
  
    
    }
  }
}

.menyItemPris {
      display: flex;

}

/* &:nth-last-child(7) {
  --y: calc(0% + 0px);
  transform: translate(-50%, var(--y)) scale(1.05);
}

&:nth-last-child(6) {
  --y: calc(0% + 0px);
  transform: translate(-50%, var(--y)) scale(1.05);
}

&:nth-last-child(5) {
  --y: calc(-200% + 200px);
  transform: translate(0%, var(--y)) scale(0.9);
  box-shadow: 0 0 1px 1px #00000003;
}
&:nth-last-child(4) {
  --y: calc(0% + 0px);
  transform: translate(-50%, var(--y)) scale(0.9);
  box-shadow: 0 0 1px 1px #00000003;
}
&:nth-last-child(3) {
  --y: calc(0% + 0px);
  transform: translate(-50%, var(--y)) scale(0.95);
}
&:nth-last-child(2) {
  --y: calc(0%);
  transform: translate(-50%, var(--y)) scale(1);
}
&:nth-last-child(1) {
  --y: calc(0% + 0px);
  transform: translate(0%, var(--y)) scale(1.05);
} */

`
