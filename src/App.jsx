import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/styles/user-all.scss"

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import EditProfile from './pages/EditProfile/EditProfile';
import Contact from './pages/Contact/Contact';

import "./assets/styles/user-datepicker.scss"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/member/profile" element={<EditProfile />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
