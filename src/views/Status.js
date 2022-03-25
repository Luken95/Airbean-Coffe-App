import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from '../assets/graphics/drone.svg';


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
      <h2>Hej</h2>
      <img src={drone} alt="drone"/>
      <p>{eta.eta}</p>
      <p>{eta.orderNr}</p>
      <button onClick={ handleOnClick }>Ok, Cool!</button>
    </section>
  )

}

export default Status;
