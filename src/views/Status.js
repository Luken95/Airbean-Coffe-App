import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from '../assets/graphics/drone.svg';
import './Status.css'

function Status(props) {
  const [ eta, setEta ] = useState('');
  const navigate = useNavigate();
  const showOrder = useRef(null);
  const hideOrder = useRef(null);
  const { orderStatus } = props;

  async function getETA(){
    const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order`)
    const data = await response.json();

    setEta(data);
  }

  function handleOnClick() {
    navigate('/menu');
  }

  useEffect(() => {
    getETA();
    if(orderStatus){
      showOrder.current.style.display = 'block';
      hideOrder.current.style.display = 'none'
    }
  }, []);

  

  return (
    <section className="statusSection">
      <section className='orderStatusFalse' ref={ hideOrder }>
        <h3 className='ordertext'>Gör en beställning först</h3>
      </section>
      <section className='orderStatusTrue' ref={ showOrder }>
        <br></br>
        <p className='pText'>Ordernummer #{eta.orderNr}</p>
        <br></br> <br></br> <br></br> 
        <img src={drone} alt="drone"/>
        <br></br> <br></br>
        <h3 className="ordertext"> Din beställning är påväg!</h3>
        <p className='pText'>{eta.eta} minuter</p>
        <br></br> <br></br> <br></br> 
      </section>
      <button className='statusbtn' onClick={ handleOnClick }>Ok, Cool!</button>
      
    </section>
  )

}

export default Status;
