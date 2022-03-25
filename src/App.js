import './App.css';
import { Routes, Route } from 'react-router-dom';

import Status from './views/Status';
import Landing from './views/Landing';
import Menylista from './views/Menylista';


import { Routes, Route } from 'react-router-dom';

import About from './views/About';

function App() {
  return (
    <div className="App">
      <p>testa</p>

     <Routes>
      <Route path="/status" element={ <Status /> } />
      <Route path='/landing' element={ <Landing /> }></Route>
      <Route path='/menu' element={ <Menylista /> } />
      <Route path="/about" element = { <About/> } />
     </Routes>
    </div>
  );
}

export default App;
