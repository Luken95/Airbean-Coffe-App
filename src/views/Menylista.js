import MenuItem from '../components/MenuItem'
import {useState, useEffect} from 'react';
import './Menylista.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

import { useRef } from 'react';


function Menylista() {
    const modal = useRef(null);
    const [ menu, setMenu ] = useState([]);

    async function getMenu(){
      const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu`)
      const data = await response.json();

      console.log(data);
      setMenu(data);
    }


    useEffect(() => {
      getMenu();
    }, []);

    const listComponents = menu.map((menuItem, index) =>{
      return <MenuItem menuItem={ menuItem } key={ index } />
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
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
          <button onClick={closeCart}>close</button>
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
