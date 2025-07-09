import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import '../Css/Checkout.css'
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h1 style={{ textAlign: 'center' }}>Checkout</h1>

      <table className="checkout-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.title} style={{ width: '100px' }} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Total: ${totalAmount}</h3>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
