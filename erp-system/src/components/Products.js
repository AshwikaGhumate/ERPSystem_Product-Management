// Products.js
import React from 'react';
import { useState } from 'react';
import ProductForm from './ProductForm.js';
import '../styles/Products.css';

function Products({products:initialOrders, updateProductOrders}) {
    // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Casual T-Shirt for Men', category: 'Clothing', price: 400, stockQuantity: 10, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 2, name: 'Mens Cotton Jacket', category: 'Clothing', price: 700, stockQuantity: 20, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' },
    { id: 3, name: 'Mens Casual Slim Fit', category: 'Clothing', price: 500, stockQuantity: 30, image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' },
    { id: 4, name: "Women's Gold & Silver Bracelet", category: 'Accessories', price: 4000, stockQuantity: 25, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
    { id: 5, name: 'Solid Gold Petite Micropave', category: 'Accessories', price: 3000, stockQuantity: 10, image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' },
    { id: 6, name: 'White Gold Plated Ring', category: 'Accessories', price: 1500, stockQuantity: 15, image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' },
    { id: 7, name: 'Gold-plated Earrings', category: 'Accessories', price: 2000, stockQuantity: 25, image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg' },
    {id:8, name:'Laptop Backpack', category:'Bags', price:800, stockQuantity:5, image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
    // Add more mock data as needed
  ]);


   

  const [editProduct, setEditProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);


  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleSubmitEdit = (editedProduct) => {
    setProducts(products.map(p => (p.id === editedProduct.id ? editedProduct : p)));
    setEditProduct(null); // Close edit form after editing
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddForm(false); // Close add form after adding
  };



  // Function to handle product deletion
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    updateProductOrders(updatedProducts);
  };

  return (
    <div className='product-page'>
      <h2 className="productname">Products Management</h2>
      <button className="add-product-button" onClick={() => setShowAddForm(true)}>Add Product</button>
      <table className="products-table">
        <colgroup >
        <col style={{width: "20%"}}/>
        <col style={{width: "15%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "10%"}}/>
        <col style={{width: "20%"}}/>
        <col style={{width: "20%"}}/>
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td><img src={product.image} alt={product.name} /></td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Render edit form if editProductId is set */}
      {editProduct && (
        <div className='overlay'>
        <ProductForm
        product={editProduct}
        onSubmit={handleSubmitEdit}
        onCancel={() => setEditProduct(null)}
        /> 
        </div>
        
      )}
      {/* {showAddForm && (
        <ProductForm
          onSubmit={handleAddProduct}
          onCancel={() => setShowAddForm(false)}
        />
      )} */}
      {showAddForm && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowAddForm(false)}>&times;</span>
                        {/* <ProductForm onSubmit={handleAddProduct} /> */}
                        <ProductForm
                            onSubmit={handleAddProduct}
                            onCancel={() => setShowAddForm(false)} // Ensure onCancel is passed
                        />
                    </div>
                </div>
            )}
    </div>
  );
}

export default Products;
