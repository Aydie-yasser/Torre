import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/user'
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
