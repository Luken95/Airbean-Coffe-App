import MenuItem from '../components/MenuItem'
import {useState, useEffect} from 'react';
import './Menylista.css'
import { useSelector } from 'react-redux'


import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";

import { useRef } from 'react';


function Menylista() {
    const modal = useRef(null);
    const [ menu, setMenu ] = useState([]);
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
      return <CartItem cartItem={thisItem.cartItem} quantity={thisItem.quantity} thisId={ thisItem.id } key={ thisItem.id } />
    })


function cartOnClick() {
  modal.current.showModal();
}

function closeCart() {
  modal.current.close();
}

    return (
      <div className='menuContainer'>
        <div>
          <Header />
        </div>

        <div>
          <button onClick={ cartOnClick }>cart</button>
        </div>

        <dialog ref={modal} className="modal">
          <h1>Cart</h1>
          { cartListComponents }
          <p>slut på cart</p>
          <button onClick={ closeCart }>close</button>
        </dialog>

        <div className="menuList">
          <h1>Meny</h1>
          { listComponents }
        </div>

        <div>
          <Footer />
        </div>
      </div>

  )
}

export default Menylista
