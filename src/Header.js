import App from './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaAngleDown,FaAngleRight, } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
        
            {/* ===================start Header============== */}
      
    <Navbar expand="lg" className="bg-body-tertiary nav_pad">
      <Container className=''>
        <Navbar.Brand href="#home"className='w-xl-100'><img src={require('./image/logo.webp')}className='logo w-100 ps-5'></img></Navbar.Brand>
        <Navbar.Toggle  onClick={handleShow} style={{backgroundColor:'rgb(139,197,198)', border:'none', color:'white'}}   />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header_txt pe-5 d-none d-lg-block text-end ">
             <Link href="#">HOME</Link>
                                            <Link  to={'/aout'}>ABOUT US</Link>
                                            <Link to={'/menupg'}>MENU<FaAngleDown></FaAngleDown></Link>
                                            <Link to={'/'}>TEAM</Link>
                                            <Link to={'/'}>PORTPHOLIO</Link>
                                            <Link to={'/'}>SERVICES<FaAngleDown></FaAngleDown></Link>
                                            <Link to={'/event'}>EVENT</Link>
                                            <Link to={'/news'}>NEWS</Link>
                                            <Link to={'/contact'}>CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
        <Offcanvas show={show} onHide={handleClose} className="side-left">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='header_txt '>
                   
                                         <li className='py-2'> <Link href="#" className='w-100'>HOME</Link></li>
                                        <li className='py-2'>  <Link href="#">ABOUT US</Link></li>
                                         <li className='py-2 w-100'>   <Link href="#" >MENU</Link><FaAngleRight></FaAngleRight></li>
                                          <li className='py-2'>  <Link href="#">TEAM</Link></li>
                                          <li className='py-2'>  <Link href="#">PORTPHOLIO</Link></li>
                                          <li className='py-2'>  <Link href="#">SERVICES</Link><FaAngleRight></FaAngleRight></li>
                                          <li className='py-2'>  <Link href="#">EVENT</Link></li>
                                            <li className='py-2'><Link href="#">NEWS</Link></li>
                                            <li className='py-2'><Link href="#">CONTACT</Link></li>
                    </Offcanvas.Body>
            </Offcanvas>
      </Container>
    </Navbar>
        
       
        
        
        
        
        </>
    )
}
export default Header;