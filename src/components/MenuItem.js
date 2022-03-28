import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../actions/cartAction';

import icon from "../assets/graphics/add.svg";

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
      {/* <div className="icon-container">
      <img src={ icon } alt="add" className="iconAdd"/>
      </div> */}
      <button className="addButton">+</button>

      <div className="menuTitlePris-container">
      <p className="menuItemTitle">{ menuItem.title }</p>
      <p className="menuItemDesc" >{ menuItem.desc }</p>
      </div>

      <p className="menuItemPris" >{ menuItem.price }kr</p>

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
  flex-direction: row;
  transition: transform 200ms;
  cursor: pointer;


.menuTitlePris-container {
  display: grid;
  align-items: left;

  .menuItemTitle {
  display: flex;
  font-weight: 700, Bold;
  font-size: x-large;
  align-content: start;
  margin: 0px;


  .menuItemDesc {
  display: flex;
  align-content: end;


    }
  }
}

.addButton {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 24px;
}

.menyItemPris {
      display: flex;

}

.icon-container {
  background-color: black;

.iconAdd {
  size: 10px;
}
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
