import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Status from './views/Status';
import Landing from './views/Landing';
import MenuList from './views/MenuList';
import Nav from './views/Nav';
import About from './views/About';

function App() {

  const [orderStatus, setOrderStatus] = useState(false)

  return (
    <div className="App">
     <Routes>

      <Route path='/*' element={ <Landing /> } />
      <Route path='/menu' element={ <MenuList orderStatus={ setOrderStatus }/> } />
      <Route path="/about" element = { <About/> } />
      <Route path="/nav" element= { <Nav/> } />
      <Route path="/status" element={ <Status orderStatus={orderStatus}/> } />

     </Routes>
    </div>
  );
}

export default App;
