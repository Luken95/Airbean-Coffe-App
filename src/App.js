import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';

import Status from './views/Status';
import Landing from './views/Landing';
import Menylista from './views/Menylista';
import Nav from './views/Nav';

import About from './views/About';

function App() {
  return (
    <div className="App">
      <p>testa</p>

     <Routes>
      <Route path="/status" element={ <Status /> } />
      <Route path='/' element={ <Landing /> }></Route>
      <Route path='/menu' element={ <Menylista /> } />
      <Route path="/about" element = { <About/> } />
      <Route path="/nav" element= { <Nav/> } />

     </Routes>
    </div>
  );
}

export default App;
