import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import {Button,Col,Form,Modal, Row} from 'react-bootstrap'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Products(props){
    const [product,setProducts]=useState([])
    
    let [show,setShow]=useState(false);
    let [addToCart, setAddToCart] = useState({});
    let {register,setValue,getValues,handleSubmit,formState:{errors}}=useForm();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function Add(prodToAdd){
        handleShow();
        setAddToCart(prodToAdd);
        
        setValue("product",prodToAdd.product);
        setValue("quantity",prodToAdd.quantity);
        setValue("price",prodToAdd.price)
        setValue("expiryDate",prodToAdd.expiryDate);
    }
    function finalAdd(){
        handleClose();
        let produ=getValues();
        produ.id=addToCart.id;
        props.setCartProducts([...props.cartProducts,produ])
        console.log(props.cartProducts)
    }
    useEffect(()=>{
        axios.get("http://localhost:4000/products")
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err));
    },[])

    return(
        <div>
            <Navigationbar/>
            <div className='container mt-2 d-flex justify-content-end'>
            <Link className='btn btn-success ms-auto' to='/addproduct'> Add product to Store</Link>
            </div>
            
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 bg-secondary pt-3'>
                {
                    
                    product?.map((prodObj)=>(
                        <div className="col mb-4 bg- mx-auto d-flex align-items-stretch ">
                        <div className="card text-center">
                            <div className="pic">
                                <img src="https://thumbs.dreamstime.com/b/shopping-cart-full-food-supermarket-aisle-elevated-view-high-internal-horizontal-composition-63616470.jpg" width={"300px"} alt="" />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className='mt-2'>Product: {prodObj.product}</h5>
                                <h5 className='mt-2'>Quantity Available: {prodObj.quantity}kg</h5>
                                <h5 className='mt-2'>Price per kg: Rs.{prodObj.price}</h5>
                                <h5 className='mt-2'>ExpiryDate: {prodObj.expiryDate}</h5>
                            </div>
                      
                            <div className="">
                            
                            <Button type='submit' className="btn btn-success m-2" onClick={()=>Add(prodObj)}>Add to Cart</Button>
                            
                            
                            </div>
                            </div>
                        </div>)
                    )
            }

                        <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        centered
                        className="modal"
                        >
                        <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                        <Form className='' onSubmit={handleSubmit(finalAdd)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" >
                        <Form.Label>Product</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Product" disabled
                            {...register("product")}
                        />
                        </Form.Group>
                        <Form.Group as={Col} md="3" >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number" disabled
                            {...register("quantity")}
                        />
                        </Form.Group>

                        <Form.Group as={Col} md="3" >
                        <Form.Label>Price per kg</Form.Label>
                        <Form.Control
                            type="number" disabled
                            {...register("price")}
                        />
                        </Form.Group>
                        
                        <Form.Group as={Col} md="6" >
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                            type="date" disabled
                            {...register("expiryDate")}
                        />
                    </Form.Group>

                    
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Required Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            {...register("requiredQuantity",{required:true})}
                        />
                        {errors.requiredQuantity?.type==='required' && <p className='text-danger'>*This field is required</p>}
                    </Form.Group>
                    </Row>
                        <Button type='submit' variant="primary" className='d-flex float-end' >
                            Add
                        </Button>
                    </Form>
                    </Modal.Body>
                        
                    </Modal>
            </div>
        </div>
    )
}

export default Products