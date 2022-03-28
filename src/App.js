import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';

import Status from './views/Status';
import Landing from './views/Landing';
import MenuList from './views/MenuList';
import Nav from './views/Nav';
import About from './views/About';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/status" element={ <Status /> } />
      <Route path='/*' element={ <Landing /> } />
      <Route path='/menu' element={ <MenuList /> } />
      <Route path="/about" element = { <About/> } />
      <Route path="/nav" element= { <Nav/> } />

     </Routes>
    </div>
  );
}

export default App;
