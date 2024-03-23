import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navigationbar from './Navigationbar'
import {MdPayment} from 'react-icons/md'

const BillingPage = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Call payment API or perform other necessary actions here
    console.log(
      `Name: ${name} Address: ${address} Card Number: ${cardNumber} Expiration Date: ${expirationDate} CVV: ${cvv}`
    );
    alert('Transaction Successful!!');
    props.setCartProducts([]);
  };

  return (
    <div className="vh-100">
    <Navigationbar/>
    <Container className='mt-5 d-flex align-items-center'>
      <Form onSubmit={handleSubmit} className='mx-auto'>
      <h1 className='text-center mb-3 text-dark text-opacity-50'>Make Payment <MdPayment/></h1>
        <Form.Group as={Row} controlId="formName" className='mb-3'>
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              className='ms-2'
              onChange={event => setName(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formAddress" className='mb-3'>
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              className='ms-2'
              onChange={event => setAddress(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formCardNumber" className='mb-3'>
          <Form.Label column sm={2}>
        Card Number
        </Form.Label>
        <Col sm={10}>
        <Form.Control
        type="number"
        placeholder="Enter card number"
        value={cardNumber}
        className='ms-2'
        onChange={event => setCardNumber(event.target.value)}
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formExpirationDate" className='mb-3'>
        <Form.Label column sm={2}>
        Expiration Date
        </Form.Label>
        <Col sm={10}>
        <Form.Control
        type="date"
        placeholder="Enter expiration date"
        value={expirationDate}
        className='ms-3'
        onChange={event => setExpirationDate(event.target.value)}
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formCvv" className='mb-3'>
        <Form.Label column sm={2}>
        CVV
        </Form.Label>
        <Col sm={10}>
        <Form.Control
        type="number"
        placeholder="Enter CVV"
        value={cvv}
        onChange={event => setCvv(event.target.value)}
        />
        </Col>
        </Form.Group>
        <Button variant="success" type="submit">
        Submit Payment
        </Button>
        </Form>
        </Container>
        </div>
    );
};

export default BillingPage;