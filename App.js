import { Outlet } from 'react-router-dom'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer/>

    </div>

  );
}

export default App;
