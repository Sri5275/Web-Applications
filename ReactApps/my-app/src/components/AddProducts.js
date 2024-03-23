import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import Navigationbar from './Navigationbar'
import {Form,Button,FormGroup} from 'react-bootstrap'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import axios from 'axios';

    function AddProducts(){

    let {register,handleSubmit,formState:{errors}}=useForm()
    function newProduct(prod){
        axios.post('http://localhost:4000/products',prod)
        .then(res=>{
            console.log(res.data)
            alert('Product Added Successfully!!')
        })
        .catch(err=>console.log(err))
    }

    
    return(
        <div className=""><Navigationbar/>
        <div className="container d-flex align-items-center">
            <h1 className='text-center text-success'>Add a Product<MdOutlineProductionQuantityLimits/></h1>
            <div className="container d-flex justify-content-center vh-100 align-items-center">
            <Form onSubmit={handleSubmit(newProduct)} className='w-50'>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Product</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" {...register("product",{required:true})} />
                            {errors.name?.type=='required' && <p className='text-danger'>*This field is required</p> }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Quantity(in kgs)</Form.Label>
                            <Form.Control type="number" placeholder="Quantity to be added" {...register("quantity",{required:true})} />
                            {errors.quantity?.type=='required' && <p className='text-danger'>*This field is required</p> }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price per kg</Form.Label>
                            <Form.Control type="number" placeholder="Price/kg" {...register("price",{required:true})} />
                            {errors.price?.type=='required' && <p className='text-danger'>*This field is required</p> }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control type="date" placeholder="" {...register("expiryDate")} />
                        </Form.Group>
                        <Button variant="primary" type='submit'>
                        Add
                    </Button>
                        
                    </Form>


            </div>
        </div>
        </div>
    )
};

export default AddProducts