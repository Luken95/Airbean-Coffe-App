import MenuItem from '../components/MenuItem'
import {useState, useEffect} from 'react';
import './Menylista.css'

import Header from "../components/Header";
import Footer from "../components/Footer";


function Menylista() {
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
  console.log("hej");
}

    return (
      <div className='menuContainer'>
        <div>
          <Header />
        </div>
        <div>
          <button onClick={ cartOnClick }>cart</button>
        </div>
        <h1>Meny</h1>
        { listComponents }

<h1>Meny</h1>
{ listComponents }

  <div>
    <Footer />
  </div>
</div>

)
}

export default Menylista
