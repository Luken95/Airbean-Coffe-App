import {useState, useEffect} from 'react';


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
<h1>Meny</h1>




</div>
)
}

export default Menylista


