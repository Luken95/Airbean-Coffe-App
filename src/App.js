import './App.css';
import { Routes, Route } from 'react-router-dom';


import Status from './views/Status'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/status" element={ <Status /> } />
    </Routes>
    </div>
  );
}

export default App;
