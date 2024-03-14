import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard({orders, products}) {
  //Static data for metrics
  const productCount = products.length;
  const totalOrders=orders.length;
 

  return (
    <div className="dashboard"> {/* Apply the 'dashboard' class */}
      {/* <h2>Dashboard </h2> */}
      <div className="background-overlay"></div>
      <div className="metrics"> {/* Apply the 'metrics' class */}
        {/* <h3 style={{color:'#61d7ce', textAlign:'center'}}>Key Metrics:</h3> */}
        <br></br>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total number of products:</td>
              <td>{productCount}</td>
            </tr>
            <tr>
              <td>Total number of orders:</td>
              <td>{totalOrders}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="manage-links"> {/* Apply the 'manage-links' class */}
        <h3>Manage Your Business:</h3>
        <Link to="/products"  >
          <button>Manage Products</button>
        </Link>
        <Link to="/orders"  >
          <button>Manage Orders</button>
        </Link>
      </div>
    </div>
  );



}

export default Dashboard;