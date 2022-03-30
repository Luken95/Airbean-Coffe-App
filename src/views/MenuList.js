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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [ menu, setMenu ] = useState([]);
    let counter = 0,
        totalPrice = 0;
    let x = 0,y = 0, z = 0;

    const cartItems = useSelector((state) => { return state.cart })

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
        x = thisItem.quantity;
      }else if(thisItem.id === 7){
        y = thisItem.quantity;
      }
      while(x > 0 && y > 0){
        z++;
        x--;
        y--;
      }
      totalPrice = totalPrice + (thisItem.quantity * thisItem.cartItem.price);
      if(z > 0){
        totalPrice = totalPrice - (38 * z);
      }
      return <CartItem cartItem={thisItem.cartItem} quantity={thisItem.quantity} key={thisItem.id} />
    })



const showMenu = useRef(null)

function cartOnClick() {
  console.log(showMenu)
  if (showMenu.current.style.display === 'block') {
    showMenu.current.style.display = 'none'
  } else {
    showMenu.current.style.display = 'block';
  }
}


function redirectMenu(){
navigate('/nav')
}

function finishOrder(){
  console.log(cartItems);
  if(cartItems.lenght > 0){
    dispatch(resetCart());
    navigate('/status');
  }else{
    console.log("no items in cart");
  }
}

    return (
      <div className='menuContainer'>
        <div>
          <Header />
        </div>
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
          <section className='scrollCart'>

          <h2>Din beställning</h2>
          { cartListComponents }
          <div>
          <p className='total'>Total</p> 
          <p className='totalPrice'>{totalPrice}kr</p>
          <p className='momsPrice'>inkl moms + drövarleverenas</p>
          </div>
          
          <button className="moneyBtn" onClick={ finishOrder }>Take my money!</button>
          </section>
        </div>
        

        <div className="menuList">
          <h1>Meny</h1>
          { listComponents }
        </div>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
      

  )
}

export default Menylista
