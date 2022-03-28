import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from '../assets/graphics/drone.svg';
import './Status.css'

function Status() {
  const [ eta, setEta ] = useState('');
  const navigate = useNavigate();

  async function getETA(){
    const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order`)
    const data = await response.json();

    console.log(data);
    setEta(data);
  }

  function handleOnClick() {
    navigate('/menu');
  }

  useEffect(() => {
    getETA();
  }, []);

  return (
    <section className="statusSection">
      <br></br>
      <p>Ordernummer #{eta.orderNr}</p>
      <br></br> <br></br> <br></br> 
      <img src={drone} alt="drone"/>
      <br></br> <br></br>
      <h3 className="ordertext"> Din beställning är påväg!</h3>
      <p>{eta.eta} minuter</p>
      <br></br> <br></br> <br></br> 
      <button className='statusbtn' onClick={ handleOnClick }>Ok, Cool!</button>
    </section>
  )

}

export default Status;
