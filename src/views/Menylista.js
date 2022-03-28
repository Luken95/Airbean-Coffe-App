import MenuItem from '../components/MenuItem'
import { useState, useEffect } from 'react';
import './Menylista.css'
import cartImage from '../assets/graphics/bag.svg'
import { useNavigate } from 'react-router-dom'
import './Menylista.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { resetCart } from '../actions/cartAction';


import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";

import { useRef } from 'react';


function Menylista() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [ menu, setMenu ] = useState([]);
    let [showModal, setShowModal] = useState(false);

    const cartItems = useSelector((state) => { return state.cart })

    async function getMenu(){
      const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu`)
      const data = await response.json();

      setMenu(data);
    }

    console.log(showModal)


    useEffect(() => {
      getMenu();
    }, []);

    const listComponents = menu.map((menuItem, index) =>{
      return <MenuItem menuItem={ menuItem } key={ index } />
  })

 function cartOnClick() {

    const cartListComponents = cartItems.map((thisItem) => {
      return <CartItem cartItem={thisItem.cartItem} quantity={thisItem.quantity} thisId={ thisItem.id } key={ thisItem.id } />
    })


function cartOnClick() {
  modal.current.showModal();
    }
  
 

 function closeCart() {
  modal.current.close();
} 

function finishOrder(){
  dispatch(resetCart());
  navigate('/status');
}

    return (
      <div className='menuContainer'>
        <div>
          <Header />
        </div>

        <div>
          <button className='cartButton' onClick={ cartOnClick }></button>
        </div>
        
        <dialog ref={modal} className="modal">
          <h1>Cart</h1>
          { cartListComponents }
          <button onClick={ closeCart }>close</button>
          <button onClick={ finishOrder }>Take my money!</button>
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
