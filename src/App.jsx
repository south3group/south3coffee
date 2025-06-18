import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import NewPassword from './pages/NewPassword/NewPassword';
import EditProfile from './pages/EditProfile/EditProfile';
import Receiver from './pages/Receiver/Receiver';
import Contact from './pages/Contact/Contact';
import Admin from './pages/Admin/Admin';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import OrderList from './pages/OrderList/OrderList';
import OrderDetail from './pages/OrderDetail/OrderDetail';
import CartList from './pages/CartList/CartList';
import PaySuccess from './pages/Payment/PaySuccess';
import PayError from './pages/Payment/PayError';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/member/profile" element={<EditProfile />} />
        <Route path="/member/receiver" element={<Receiver />} />
        <Route path="/member/orders" element={<OrderList />} />
        <Route path="/member/orders/detail" element={<OrderDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/payment/success" element={<PaySuccess />} />
        <Route path="/payment/error" element={<PayError />} />
      </Routes>
    </>
  );
};

export default App;
