// // OrderDetailsForm.js
import React, { useEffect, useState } from 'react';
import '../styles/Orders.css';

function OrderDetailsForm({ order, onClose }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    date: '',
    shipdate: '',
    productname: '',
    category: '',
    status: '',
  });

  useEffect(() => {
    if (order) {
      setFormData({
        id: order.id || '',
        name: order.customerName || '',
        date: order.orderDate || '',
        shipdate: order.shipDate || '',
        productname: order.productname || '',
        category: order.category || '',
        status: order.status || '',
      });
    }
  }, [order]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{textAlign:'center', backgroundColor:'#61d7ce', width:'100%', height:'10%', paddingTop:'10px', paddingBottom:'10px'}}>Order Details</h2>
        <p><strong>Order ID:</strong> {formData.id}</p>
        <p><strong>Customer Name:</strong> {formData.name}</p>
        <p><strong>Order Date:</strong> {formData.date}</p>
        <p><strong>Shippment Date:</strong> {formData.shipdate}</p>
        <p><strong>Product Name:</strong> {formData.productname}</p>
        <p><strong>Product Category:</strong> {formData.category}</p>
        <p><strong>Status:</strong> {formData.status}</p>
        <button type="button" style={{marginLeft:'40%', color:'black', backgroundColor:'#61d7ce', width:'55px', height:'25px'}} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OrderDetailsForm;
