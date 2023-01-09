import React, {useState, useEffect} from 'react'
import Counter from "./Components/Counter";
import {ErrorBoundary} from "./Components/ErrorBoundary";
import {Routes, Route, Link} from 'react-router-dom'
import Errortest from "./Components/Errortest";
import Home from './Components/Home';
import './style.scss'

const Error = () => {
  return (
    <div>
    <h1>Hmm...this page doesn’t exist. Try searching for something else.</h1>
    </div>
  )
}
function App() {
  const [ colorTheme, setColorTheme ] = useState('theme-white');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }
  return (
    <div className={`main-nav ${colorTheme}`}> 
      <div>
      <Link to="/" className='nav'>Home</Link>
        <Link to="/counter" className='nav'>Counter</Link>
      <Link to="/errortest" className='nav'>Testingerror</Link>
      </div>
      <div className='theme-options'>
        <div id="theme-white"
        onClick={() => handleClick('theme-white')}
        className='active'
        />
        <div id="theme-blue"
        onClick={() => handleClick('theme-blue')} className='active'/>
        <div id="theme-green"
        onClick={() => handleClick('theme-green')} className='active'/>
        <div id="theme-black"
        onClick={() => handleClick('theme-black')}/>
        <div id="theme-purple"
        onClick={() => handleClick('theme-purple')}/>
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
