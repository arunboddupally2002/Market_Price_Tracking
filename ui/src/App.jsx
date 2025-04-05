import React, { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MarketList from "./components/MarketList";
import About from './components/About';
import Contact from './components/Contact';
import Auth from './components/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route
            path="/home"
            element={
              isLoggedIn ? <>
                <Banner />
                <MarketList />
              </>:
              <Navigate to="/login" />
            }
          />
          <Route path="/about" element={ isLoggedIn ?<About />:
              <Navigate to="/login" />} />
          <Route path="/contact" element={ isLoggedIn ?<Contact />:
              <Navigate to="/login" />} />
          <Route 
            path="/login" 
            element={<Auth setIsLoggedIn={setIsLoggedIn} />} 
          />
          <Route 
            path="/" 
            element={<Auth setIsLoggedIn={setIsLoggedIn} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;