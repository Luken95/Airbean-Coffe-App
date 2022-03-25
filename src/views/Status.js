import { useEffect, useState } from 'react';


function Status() {
  const [ eta, setEta ] = useState('');

  async function getETA(){
    const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order`)
    const data = await response.json();

    console.log(data);
    setEta(data);
  }


  useEffect(() => {
    getETA();
  }, []);

  return (
    <section>
      <h2>Hej</h2>
      <p>{eta.eta}</p>
      <p>{eta.orderNr}</p>
    </section>
  )

}

export default Status;
