import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../actions/cartAction';

import './MenuList.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import MenuItem from '../components/MenuItem'
import styledComponents from 'styled-components';
import { getByDisplayValue } from '@testing-library/react';


function Menylista() {
    const navigate = useNavigate(),
          dispatch = useDispatch(),
          modal = useRef(null),
          [ menu, setMenu ] = useState([]),
          cartItems = useSelector((state) => { return state.cart }),
          showMenu = useRef(null);
    let counter = 0,
        totalPrice = 0,
        campaignProductOne = 0,
        campaignProductTwo = 0,
        campaignDiscountTimes = 0;



    async function getMenu(){
      const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu`)
      const data = await response.json();

      setMenu(data);
    }


    useEffect(() => {
      getMenu();
    }, []);

    const listComponents = menu.map((menuItem, index) =>{
      return <MenuItem menuItem={ menuItem } key={ index } />
    })


    const cartListComponents = cartItems.map((thisItem) => {
      counter = counter + thisItem.quantity;
      if(thisItem.id === 1){
        campaignProductOne = thisItem.quantity;
      }else if(thisItem.id === 7){
        campaignProductTwo = thisItem.quantity;
      }
      while(campaignProductOne > 0 && campaignProductTwo > 0){
        campaignDiscountTimes++;
        campaignProductOne--;
        campaignProductTwo--;
      }
      totalPrice = totalPrice + (thisItem.quantity * thisItem.cartItem.price);
      if(campaignDiscountTimes > 0){
        totalPrice = totalPrice - (38 * campaignDiscountTimes);
      }
      return <CartItem cartItem={thisItem.cartItem} quantity={thisItem.quantity} key={thisItem.id} />
    })





function cartOnClick() {
  console.log(showMenu)
  if (showMenu.current.style.display === 'block') {
    showMenu.current.style.display = 'none'
  } else {
    showMenu.current.style.display = 'block';
  }
}


function redirectMenu(){
navigate('/nav');
}

function finishOrder(){
  if(cartItems.length > 0){
    dispatch(resetCart());
    navigate('/status');
  }else{
    console.log("no items in cart");
  }

}

    return (
      <div className='menuContainer'>
        <Header />

        <div className='counter'>
          { counter }
        </div>

        <div>
          <button className='cartButton' onClick={ cartOnClick }></button>
        </div>

        <div>
        <button className='menuButton' onClick={ redirectMenu }> </button>
        </div>

        <div className='shoppingCart' ref={ showMenu }>

          <div className='menuArrow'></div>
          

          <h2>Din beställning</h2>
          <section className='scrollCart'>{ cartListComponents }</section>
          <div>
          <p className='totalText'>Total</p> 
          <p className='totalPrice'>{totalPrice}kr</p>
          <p className='momsPrice'>inkl moms + drövarleverenas</p>
          
          </div>

          <button className="moneyBtn" onClick={ finishOrder }>Take my money!</button>
          
        </div>


        <div className="menuList">
          <h1>Meny</h1>
          { listComponents }
        </div>

        <Footer />
      </div>
  )
}

export default Menylista
