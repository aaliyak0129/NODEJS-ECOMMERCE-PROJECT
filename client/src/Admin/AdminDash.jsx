
// import '../Css/Admindash.css'

// import { useState } from "react";

// const AdminDash = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Gold Ring", price: "4999", stock: 10 },
//     { id: 2, name: "Diamond Necklace", price: "15999", stock: 5 },
//   ]);

//   const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });

//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (!newProduct.name || !newProduct.price || !newProduct.stock) return;
//     const id = products.length + 1;
//     setProducts([...products, { id, ...newProduct }]);
//     setNewProduct({ name: "", price: "", stock: "" });
//   };

//   const handleDelete = (id) => {
//     setProducts(products.filter((item) => item.id !== id));
//   };

//   return (
// <>
// <div className="back">
//     <div className="table-container">
//         <h1>Dashboard Overview</h1>
//       <h2>Product Management</h2>

//       <div className="form-row">
//         <input name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} />
//         <input name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
//         <input name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} />
//         <button onClick={handleAdd}>Add</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>#</th><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(({ id, name, price, stock }) => (
//             <tr key={id}>
//               <td>{id}</td>
//               <td>{name}</td>
//               <td>₹{price}</td>
//               <td>{stock}</td>
//               <td>
//                 <button onClick={() => handleDelete(id)}>🗑 Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//     </>
//   )}
//   export default AdminDash






import React from "react";
import "../Css/Admindash.css";
import { FaBoxOpen, FaUsers, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

const AdminDash = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>GLITZ & GLAM <br />ADMIN</h2>
        <ul>
          <li><FaShoppingCart /> Orders</li>
          <li><FaBoxOpen /> Products</li>
          <li><FaUsers /> Customers</li>
          <li><FaSignOutAlt /> Logout</li>
        </ul>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <span>Welcome, Admin 👑</span>
        </header>

        <section className="dashboard-section">
          <h1>Dashboard Overview</h1>
          <div className="card-grid">
            <div className="glass-card">
              <FaShoppingCart className="icon" />
              <h3>120</h3>
              <p>Total Orders</p>
            </div>
            <div className="glass-card">
              <FaBoxOpen className="icon" />
              <h3>45</h3>
              <p>Products</p>
            </div>
            <div className="glass-card">
              <FaUsers className="icon" />
              <h3>98</h3>
              <p>Customers</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDash;
