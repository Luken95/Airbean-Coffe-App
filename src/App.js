import './App.css';

import { Routes, Route } from 'react-router-dom';

import About from './views/About';

function App() {
  return (
    <div className="App">
      <p>testa</p>

      <Routes>
        <Route path="/about" element = { <About/> } />
  
      </Routes>
    </div>
  );
}

export default App;
