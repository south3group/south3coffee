import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./assets/styles/user-all.scss"
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
