import "../Css/Admindash.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CLOUD_NAME = "dqd5l02w7"; // ✅ Your Cloudinary Cloud Name
const UPLOAD_PRESET = "Upload_product"; // ✅ Your Upload Preset

const AdminDash = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    { id: 1, name: "Gold Ring", price: "4999", Quantity: 10, image: "" },
    { id: 2, name: "Diamond Necklace", price: "15999", Quantity: 5, image: "" },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    Quantity: "",
    imageFile: null,
    image: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setNewProduct({ ...newProduct, imageFile: files[0] });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleAddOrUpdate = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.Quantity) return;

    let imageUrl = newProduct.image;

    if (newProduct.imageFile) {
      const formData = new FormData();
      formData.append("file", newProduct.imageFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        setUploadProgress(0);
        const cloudRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${"dqd5l02w7"}/image/upload`,
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(percent);
            },
          }
        );
        imageUrl = cloudRes.data.secure_url;
      } catch (err) {
        alert("Image upload failed");
        return;
      }
    }

    const productData = {
      id: isEditing ? editId : products.length + 1,
      name: newProduct.name,
      price: newProduct.price,
      Quantity: newProduct.Quantity,
      image: imageUrl,
    };

    if (isEditing) {
      setProducts(products.map((p) => (p.id === editId ? productData : p)));
      setIsEditing(false);
      setEditId(null);
    } else {
      setProducts([...products, productData]);
    }

    setNewProduct({ name: "", price: "", Quantity: "", imageFile: null, image: "" });
    setUploadProgress(0);
  };

  const handleEdit = (product) => {
    setNewProduct({
      name: product.name,
      price: product.price,
      Quantity: product.Quantity,
      image: product.image,
      imageFile: null,
    });
    setIsEditing(true);
    setEditId(product.id);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };

  return (
    <div className="back">
      <div className="table-container">
        <div className="topbar">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <h2>Product Management</h2>

        <div className="form-row">
          <input
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <input
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <input
            name="Quantity"
            placeholder="Quantity"
            value={newProduct.Quantity}
            onChange={handleChange}
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <button onClick={handleAddOrUpdate}>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="upload-bar-container">
            <div className="upload-bar" style={{ width: `${uploadProgress}%` }}>
              {uploadProgress}%
            </div>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>#</th>
              <th style={{textAlign:"center"}}>Image</th>
              <th style={{textAlign:"center"}}>Name</th>
              <th style={{textAlign:"center"}}>Price</th>
              <th style={{textAlign:"center"}}>Quantity</th>
              <th style={{textAlign:"center"}}>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, price, Quantity, image }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  {image ? (
                    <img src={image} alt={name} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>{name}</td>
                <td>₹{price}</td>
                <td>{Quantity}</td>
                <td>
                  <button onClick={() => handleEdit({ id, name, price, Quantity, image })}> Edit</button>
                  <button onClick={() => handleDelete(id)}style={{margin:"10px"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDash;
