import '../Css/AdminLogin.css';
import React, { useState } from 'react';
import BackEndUrl from '../Utils/BackEndUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminId, password);

    const api = `${BackEndUrl}/admin/adminlogin`;

    try {
      const response = await axios.post(api, {
        adminId: adminId,
        password: password
      });
toast.success("Login successful!", {
  className: "golden-toast",
  bodyClassName: "golden-toast-body",
  progressClassName: "golden-toast-progress",
  position: "top-right",
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: true
});

      navigate('/admindash');

    } catch (error) {
      console.error(error?.response?.data?.msg || "Login failed");
toast.error("Login failed!", {
  className: "golden-toast",
  bodyClassName: "golden-toast-body",
  progressClassName: "golden-toast-progress"
});
}
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Admin Login</h1>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Email"
         
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
         
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
