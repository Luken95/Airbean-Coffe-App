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
    <MenuItemWrapper >
      {/* <p>-----</p> */}
      {/* <div className="icon-container">
      <img src={ icon } alt="add" className="iconAdd"/>
      </div> */}

      <div className="buttonMenuTitle-container">
      <button className="addButton" onClick={ addToStore }>+</button>

      <div className="menuTitle-container">
        <p className="menuItemTitle">{ menuItem.title }</p>
        <p className="menuItemDesc" >{ menuItem.desc }</p>
      </div>
      </div>
      <div className="Pris-container">
        <p className="menuItemPris" >{ menuItem.price }kr</p>

      </div>
    </MenuItemWrapper>
  )
}

export default MenuItem;

const MenuItemWrapper = styled.section`
  width: 82%;
  display: inline-flex;
  margin-bottom: 10px;
  cursor: pointer;

.buttonMenuTitle-container{
  display: flex;
}
.menuTitle-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
  .menuItemTitle {
    margin:0;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 120%;


}

  .menuItemDesc {
    margin:1px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

}

.Pris-container{
  display: flex;
}

.addButton {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 24px;
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
