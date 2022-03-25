import {useState, useEffect} from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

function Menylista (){

    const [ Menu, setMenu ] = useState('');

    async function getMenu(){
      const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu`)
      const data = await response.json();
  
      console.log(data);
      setMenu(data);
    }
  
  
    useEffect(() => {
      getMenu();
    }, []);
  


return(
<div>
  <div>
    <Header />
  </div>

<h1>Meny</h1>

  <div>
    <Footer />
  </div>
</div>
)
}

export default Menylista


