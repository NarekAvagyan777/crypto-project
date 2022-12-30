import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CryptoHome from './components/CryptoHome/CryptoHome';
import CryptoDetail from './components/CryptoDetail/CryptoDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
