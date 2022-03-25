import './App.css';
import { Routes, Route } from 'react-router-dom';

import Status from './views/Status';
import Landing from './views/Landing';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/status" element={ <Status /> } />
      <Route path='/landing' element={ <Landing /> }></Route>
     </Routes>
    </div>
  );
}

export default App;
