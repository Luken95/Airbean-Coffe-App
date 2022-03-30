import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../actions/cartAction';

import './MenuList.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import MenuItem from '../components/MenuItem'


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


function cartOnClick() {
  modal.current.showModal();
}

 function closeCart() {
  modal.current.close();
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

        <dialog ref={modal} className="modal">
          <h1>Cart</h1>
          { cartListComponents }
          <div>
          <p>Total {totalPrice}kr</p>
          <p>inkl moms + drövarleverenas</p>
          </div>
          <button onClick={ closeCart }>close</button>
          <button className="moneyBtn" onClick={ finishOrder }>Take my money!</button>
        </dialog>

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
