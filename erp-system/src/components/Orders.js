import React, { useState } from 'react';

import OrderDetailsForm from './OrderDetailsModal.js';


import '../styles/Products.css';

function Orders({ orders: initialOrders, updateOrders }) {
  
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '02-01-2024', shipDate: '15-01-2024', productname:'Casual T-Shirt for Men', category:'Clothing', status: 'Completed' },
    { id: 2, customerName: 'Jane Smith', orderDate: '10-01-2024', shipDate: '20-01-2024', productname:'Mens Cotton Jacket', category:'Clothing', status: 'Completed' },
    { id: 3, customerName: 'Peter Gonsalves', orderDate: '23-01-2024', shipDate: '28-01-2024', productname:'Casual T-Shirt for Men', category:'Clothing', status: 'Completed' },
    { id: 4, customerName: 'Maria Dsouza', orderDate: '29-01-2024', shipDate: '08-02-2024', productname:'Solid Gold Petite Micropave', category:'Accessories', status: 'Completed' },
    { id: 5, customerName: 'Franklin Miranda', orderDate: '02-02-2024', shipDate: '15-02-2024', productname:'Laptop Backpack', category:'Bags', status: 'Completed' },
    { id: 6, customerName: 'Jade Fernandes', orderDate: '10-02-2024', shipDate: '18-02-2024', productname:'Mens Casual Slim Fit', category:'Clothing', status: 'Completed' },
    { id: 7, customerName: 'Robert Smith', orderDate: '17-02-2024', shipDate: '01-03-2024', productname:'White Gold Plated Ring', category:'Acessories', status: 'Completed' },
    { id: 8, customerName: 'Pinto Walter', orderDate: '09-03-2024', shipDate: '20-03-2024', productname:'Mens Cotton Jacket', category:'Clothing', status: 'Pending' },
    { id: 9, customerName: 'Periwinkle Doe', orderDate: '10-03-2024', shipDate: '22-03-2024', productname:"Women's Gold & Silver Bracelet", category:'Accessories', status: 'Pending' },
    { id: 10, customerName: 'Jordan Dsouza', orderDate: '20-03-2024', shipDate: '28-03-2024', productname:'Laptop Backpack', category:'Bags', status: 'Pending' },
  ]);

  
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  

  

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleUpdateStatus = (order, newStatus) => {
    const updatedOrders = orders.map(o => o.id === order.id ? { ...o, status: newStatus } : o);
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
  };



  return (
    <div className='product-page'>
      <h2 className="productname">Orders Management</h2>
      <table className="products-table">
        <colgroup >
        <col style={{width: "5%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "15%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "30%"}}/>
        </colgroup>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Ship Date</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.shipDate}</td>
              <td>{order.productname}</td>
              <td>{order.category}</td>
              <td>{order.status}</td>
              <td>
                <button className="action-button" onClick={() => handleViewDetails(order)}>View Details</button>
                <button className="action-button" onClick={() => handleUpdateStatus(order, 'Completed')}>Mark as Completed</button>
                <button className="action-button" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      

      {selectedOrder &&  Object.keys(selectedOrder).length > 0 &&(
        <div>
          <OrderDetailsForm order={selectedOrder} onClose={handleCloseModal} />
          
        </div>
      )}
    </div>
  );
}

export default Orders;
