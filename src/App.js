import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/landing' element={ <Landing /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
