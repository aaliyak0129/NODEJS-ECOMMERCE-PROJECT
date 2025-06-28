import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import AdminLogin from "./Admin/Adminlogin";


function App() {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} /> 
  <Route path="/admin" element={<AdminLogin/>}/>

  </Route>
    
</Routes>
  );
}

export default App;
