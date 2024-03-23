import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigationbar(){
    return(
        <div >
        <Navbar bg="primary" variant="dark" className='rounded'>
        <Container>
          <Navbar.Brand href="#home"><img src='https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png' width='50px' className='rounded-5'/></Navbar.Brand>
          <Nav className="me-0">
            <Nav.Link><NavLink to="/products" className='nav-link'>Products</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/bill" className='nav-link'>Cart</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/billpage" className='nav-link'>Bill</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default Navigationbar