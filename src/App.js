import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';
import Contact from './components/ContactMe'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
