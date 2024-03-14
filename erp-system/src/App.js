import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; 

import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';

import './App.css';
import OrderCalendar from './components/OrderCalendar';

function App() {
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

  const[products, setProducts]=useState([
    { id: 1, name: 'Casual T-Shirt for Men', category: 'Clothing', price: 400, stockQuantity: 10, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 2, name: 'Mens Cotton Jacket', category: 'Clothing', price: 700, stockQuantity: 20, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' },
    { id: 3, name: 'Mens Casual Slim Fit', category: 'Clothing', price: 500, stockQuantity: 30, image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' },
    { id: 4, name: "Women's Gold & Silver Bracelet", category: 'Accessories', price: 4000, stockQuantity: 25, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
    { id: 5, name: 'Solid Gold Petite Micropave', category: 'Accessories', price: 3000, stockQuantity: 10, image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' },
    { id: 6, name: 'White Gold Plated Ring', category: 'Accessories', price: 1500, stockQuantity: 15, image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' },
    { id: 7, name: 'Gold-plated Earrings', category: 'Accessories', price: 2000, stockQuantity: 25, image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg' },
    {id:8, name:'Laptop Backpack', category:'Bags', price:800, stockQuantity:5, image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
  ]);

  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
  };

  const updateProductOrders = (updatedProductOrders) => {
    setProducts(updatedProductOrders);
  }




  return (
    <Router>
      <div className="App">
        <nav className="navbar">
      <div className="container">
        <h2 className="logo">My Dashboard</h2>
        <div className='dashboard-items'>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Dashboard</Link></li>
        </ul>
        <ul className="nav-links">
          <li><Link to="/products" className="nav-link">Products</Link></li>
        </ul>
        <ul className='nav-links'>
        <li><Link to="/orders" className="nav-link">Orders</Link></li>
        </ul>
        <ul className='nav-links'>
        <li><Link to="/orders-calendar" className="nav-link">Calendar</Link></li>
        </ul>
        </div>
        
      </div>
    </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={<Dashboard orders={orders} products={products}/>}
          ></Route>
          <Route
            exact
            path="/products"
            element={<Products products={products} updateProductOrders={updateProductOrders}/>}
          ></Route>
          <Route
            exact
            path="/orders"
            element={<Orders orders={orders} updateOrders={updateOrders}/>}
          ></Route>
          <Route
            exact
            path="/orders-calendar"
            element={<OrderCalendar/>}
          ></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
