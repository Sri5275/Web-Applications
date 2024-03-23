import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from './Navigationbar'
import {Table} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

function Bill(props) {
  const [customerName, setCustomerName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  let [sum,setSum]=useState(0);
  useEffect(()=>{
    let s=0;
    props.cartProducts.map((prod)=>s+=(+prod.requiredQuantity)*(+prod.price))
    setSum(s);
  },[])


  return (
    <div className="text-center vh-100">
    <Navigationbar/>
      {orderPlaced ? (
        <div>Order placed successfully!</div>
      ) : (
        <div className=''>
          <div className="mt-3"><h1>Billing System of a Departmental Store</h1></div>
          {/* <div className="mt-3">
          <input
            type="text"
            placeholder="Enter customer name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          </div> */}
          <div className="mt-5"><h2>Product List</h2></div>
          <div className="mt-3">
          <Table striped bordered className="text-center mx-auto w-50">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity(kg)</th>
                <th>Price(Rs)</th>
              </tr>
            </thead>
            <tbody>
              {props.cartProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.product}</td>
                  <td>{product.requiredQuantity}</td>
                  <td>{(+product.requiredQuantity)*(+product.price)}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
          <h5>Total Price: {sum}</h5>
          </div>
          <div className="">
          <button className='btn btn-success'><NavLink to='/billpage' className='nav-link'>Place Order</NavLink></button>
          </div>
        </div>
     

      )}
    </div>
  );
}

export default Bill;