import './App.css';
import { Routes, Route } from 'react-router-dom';

import Status from './views/Status';
import Landing from './views/Landing';
import Menylista from './views/Menylista';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/status" element={ <Status /> } />
      <Route path='/landing' element={ <Landing /> }></Route>
      <Route path='/menu' element={ <Menylista /> } />
     </Routes>
    </div>
  );
}

export default App;
