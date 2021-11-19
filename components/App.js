import { Outlet } from 'react-router-dom'
import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails'


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
