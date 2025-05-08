import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./assets/styles/user-all.scss"
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './pages/Login/Login';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
