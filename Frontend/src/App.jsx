import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Navbar from './Components/Navbar/Navbar';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import './index.css'


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
        </Routes>
      </div> 
    </>
  );
};

export default App;
