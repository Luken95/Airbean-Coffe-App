import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addCartItem } from '../actions/cartAction';

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

      <div className="buttonMenuTitle-container">
      <input type="image" src={ icon } alt="add" className="addButton" onClick={ addToStore }/>

      <div className="menuTitle-container">
        <div className="titelDotts">
          <p className="menuItemTitle">{ menuItem.title }</p>
          <p className="dottedLine">......................................</p>
        </div>
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
  width: 88%;
  display: inline-flex;
  margin-bottom: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

.buttonMenuTitle-container{
  display: flex;
}

.dottedLine {
  position: absolute;
  left: 160px;
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}

.titelDotts{
  display: flex;
}
.menuTitle-container {
  display: flex;
  margin-left:15px;
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
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: #000;
  /* color: #fff; */
  font-size: 24px;
  padding:8px;
}


.icon-container {
  background-color: black;

.iconAdd {
  size: 10px;
}
}


`
