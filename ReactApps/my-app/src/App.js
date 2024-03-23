import React, { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './components/Root'
import Products from './components/Products'
import Login from './components/Login'
import BillingPage from './components/BillingPage'
import Bill from './components/Bill'
import AddProducts from './components/AddProducts.js'
function App() {
    const [cartProducts,setCartProducts]=useState([])
    console.log(cartProducts)
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children:[
                {
                   path:"/",
                   element:<Login/>
                },
                {
                    path:"/products",
                    element:<Products cartProducts={cartProducts} setCartProducts={setCartProducts} />
                },
                {
                    path:"/addproduct",
                    element:< AddProducts />
                },
                {
                   path:"/bill",
                   
                   element:<Bill cartProducts={cartProducts} /> 
                },
                {
                   path:"/billpage",
                   element:<BillingPage setCartProducts={setCartProducts} /> 
                }
            ]
        }
    ]);

  return (
    <div className='App container'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App