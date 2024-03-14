import React, { useState, useEffect } from 'react';


function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
    image: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || '',
        price: product.price || 0,
        stockQuantity: product.stockQuantity || 0,
        image: product.image || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...product, ...formData });
    setFormData({
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
      image: '',
    });
  };

  

  return (
    <div>
      <br></br>
      <h3 style={{color:'black', textAlign:'center', backgroundColor:'#61d7ce', width:'100%', height:'50%', paddingTop:'10px', paddingBottom:'10px'}}>{product ? 'Edit Product' : 'Add Product'}</h3>
      <form onSubmit={handleSubmit} style={{backgroundColor:'white', width:'350px', heigth:'450px', paddingTop:'10px', paddingLeft:'10px', paddingBottom:'10px'}}>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
          <label htmlFor="name">Name:</label>
          </div>
          <div style={{width:'50%'}}>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          
        </div>
        <br></br>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
          <label htmlFor="category">Category:</label>
          </div>
          <div style={{width:'50%'}}>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>
          
        </div>
        <br></br>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
          <label htmlFor="price">Price:</label>
          </div>
          <div style={{width:'50%'}}>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          
        </div>
        <br></br>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
          <label htmlFor="stockQuantity">Stock Quantity:</label>
          </div>
          <div style={{width:'50%'}}>
          <input type="number" id="stockQuantity" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} />
          </div>
          
        </div>
        <br></br>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
          <label htmlFor="image">Image URL:</label>
          </div>
          <div style={{width:'50%'}}>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          </div>
          
        </div>
        <br></br>
        <div>
          <button type="submit" style={{marginLeft:'100px', color:'black', backgroundColor:'#61d7ce', width:'55px', height:'25px'}}>{product ? 'Save' : 'Add'}</button>
          {/* <button type="button"  style={{marginLeft:'20px', color:'black', backgroundColor:'#61d7ce', width:'55px', height:'25px'}}onClick={onCancel}>Cancel</button> */}
          <button type="button" style={{marginLeft:'20px', color:'black', backgroundColor:'#61d7ce', width:'55px', height:'25px'}} onClick={onCancel}>Cancel</button>

        </div>
      </form>
    </div>
    
  );
}

export default ProductForm;
