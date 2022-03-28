import MenuItem from '../components/MenuItem'
import { useState, useEffect, useRef } from 'react';
import './Menylista.css'
import cartImage from '../assets/graphics/bag.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../actions/cartAction';


import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";


function Menylista() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [ menu, setMenu ] = useState([]);
    let [showModal, setShowModal] = useState(false);
    let counter = 0,
        totalPrice = 0;
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


    const cartListComponents = cartItems.map((thisItem) => {
      counter = counter + thisItem.quantity;
      totalPrice = totalPrice + ( thisItem.quantity * thisItem.cartItem.price);
      return <CartItem cartItem={thisItem.cartItem} quantity={thisItem.quantity} thisId={ thisItem.id } key={ thisItem.id } />
    })


function cartOnClick() {
  modal.current.showModal();
}

 function closeCart() {
  modal.current.close();
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

        <div>
          <button className='cartButton' onClick={ cartOnClick }> {counter} </button>
        </div>

        <dialog ref={modal} className="modal">
          <h1>Cart</h1>
          { cartListComponents }
          <button onClick={ closeCart }>close</button>
          <button onClick={ finishOrder }>Take my money!</button>
          <p>Total price {totalPrice}kr</p>
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
