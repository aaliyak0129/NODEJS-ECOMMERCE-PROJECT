import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import AdminLogin from "./Admin/Adminlogin";
import AdminDash from "./Admin/AdminDash";
import { ToastContainer } from 'react-toastify';
import Checkout from './Pages/Checkout'
function App() {
  return (
    <>
    
      <ToastContainer />
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} /> 
  <Route path="/adminlogin" element={<AdminLogin/>}/>
  <Route path="/admindash" element={<AdminDash/>}/>
      <Route path="/checkout" element={<Checkout />} />
  </Route>
    
</Routes>

</>
  );
}

export default App;
