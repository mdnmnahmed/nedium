import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from  "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
