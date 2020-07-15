import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <div id="abc" sty>I modified the create react app, in the app.js i modified to render login component,(the code above i posted belongs to login component), so in my app.js it only contain that homepage of default react app. Now my problem is, when I give local host:3000 it gives me in this order (doctor login page(text),username text box,password box, then login button) Now when I hit login, I'm expecting app component only to be rendered on that page, but what I'm getting is in this order(doctor login page(text),username text box,password box, then login button)</div>
    </div>
  );
}

export default App;
