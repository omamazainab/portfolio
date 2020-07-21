import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
