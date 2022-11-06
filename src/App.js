import React from 'react'
import Counter from "./Components/Counter";
import {ErrorBoundary} from "./Components/ErrorBoundary";
import {Routes, Route, Link} from 'react-router-dom'
import Errortest from "./Components/Errortest";
import Home from './Components/Home';
import './style.css'

const Error = () => {
  return (
    <div>
    <h1>Hmm...this page doesn’t exist. Try searching for something else.</h1>
    </div>
  )
}
function App() {
  return (
    <div className="main-nav"> 
      <div>
      <Link to="/" className='nav'>Home</Link>
        <Link to="/counter" className='nav'>Counter</Link>
      <Link to="/errortest" className='nav'>Testingerror</Link>
      </div>
      
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/errortest" element={<ErrorBoundary><Errortest/></ErrorBoundary>}/>
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
