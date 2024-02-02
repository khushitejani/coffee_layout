import App from './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaLocationDot,FaAngleRight,FaInstagram,FaFacebookF, } from "react-icons/fa6";
import { MdOutlinePhoneIphone,MdOutlineMail, } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from 'react';
import whitelogo from './image/asset 5.webp';
 import { IoLogoLinkedin } from "react-icons/io" ;
import { FaTwitter } from "react-icons/fa";


function Footer(){

    return(
        <>
        
            {/* ===================start footer============== */}
<footer className='footer '>
            <Container className=''  >
                <Row className='main_footer' md={2} lg={4} sm={1} xs={1}> 
                    <Col className='footer_Sec'>   
                            <h4>ABOUT COMPANY</h4>
                            <div className='w-50  pb-3'><img src={whitelogo} ></img></div>
                            <p style={{color:'rgb(109,96,90)', fontSize:'15px'}}>Arabusta is a place for your perfect time over a cup of fragrant coffee. We offer over 100 sorts of coffee, freshly ground and made for you. Here you can try delicious desserts highlighting coffee taste.</p>
                    </Col>
                    <Col  className='footer_Sec '>
                            <h4>OPENING HOURS</h4>
                            <li className='d-flex justify-content-between py-2'>
                                <div>MONDAY</div>
                                <div style={{color:'#8BC5C6'}}>CLOSED</div>
                                
                            </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>TUESDAY</div>
                                <div style={{color:'#8BC5C6'}}>9:00 – 22:00</div>
                            </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>WEDNESDAY</div>
                                <div style={{color:'#8BC5C6'}}>9:00 – 22:00</div>
                            </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>THURSDAY</div>
                                <div style={{color:'#8BC5C6'}}>9:00 – 22:00</div>
                            </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>FRIDAY</div>
                                 <div style={{color:'#8BC5C6'}}>9:00 – 1:00</div>

                            </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>SATURDAY</div>
                                <div style={{color:'#8BC5C6'}}>12:00 – 01:00</div>
                             </li>
                            <li className='d-flex justify-content-between py-2'>
                                <div>SUNDAY</div>
                                <div style={{color:'#8BC5C6'}}>9:00 – 22:00</div>
                            </li>
                    </Col>
                    <Col  className='footer_Sec pt-md-5'>
                            <h4>CONTACT INFO</h4>
                            <p style={{color:'rgb(109,96,90)', fontSize:'15px', lineHeight:'30px',paddingBottom:'30px'}}>You can always contact with us via email or phone. Get in touch with contact and get a quote form.</p>
                            <div style={{color:'rgb(109,96,90)',paddingBottom:'15px'}}><FaLocationDot style={{color:'#8BC5C6',marginRight:'15px', fontSize:'20px'}}></FaLocationDot>4578 Marmora Road, Glasgow</div>
                            <div style={{color:'#8BC5C6',paddingBottom:'15px'}}><MdOutlinePhoneIphone style={{color:'#8BC5C6',marginRight:'15px', fontSize:'20px'}}></MdOutlinePhoneIphone>+7-495-758978978</div>
                            <div style={{color:'#8BC5C6',paddingBottom:'15px'}}><MdOutlineMail style={{color:'#8BC5C6',marginRight:'15px', fontSize:'20px'}}></MdOutlineMail>info@domainlink.org</div>
                    </Col>
                    <Col  className='footer_Sec pt-md-5'>
                            <h4>OTHER LOCATIONS</h4>
                            <li className='d-flex w-75'><div><FaLocationDot style={{color:'#8BC5C6',marginRight:'15px', fontSize:'20px',marginTop:'15px'}}></FaLocationDot></div>
                                <div style={{color:'rgb(109,96,90)',paddingBottom:'15px'}}>2606 Saints Alley   Tampa, FL 33602</div>
                            </li>
                            <li className='d-flex w-75'><div><FaLocationDot style={{color:'#8BC5C6',marginRight:'15px', fontSize:'20px'}}></FaLocationDot></div>
                                <div style={{color:'rgb(109,96,90)',paddingBottom:'15px'}}>3497 Watson Street Camden, NJ 08102</div>
                            </li>
                        
                    </Col>
                </Row>
              
            </Container>
           
            
            </footer>
            <footer className='bg-black text-white py-3'>
            <Container >
            <Row className='text-md-center' xs={1} lg={2}>
                    <Col className='text-center'>Zemez ©. All rights reserved.</Col>
                    <Col className='d-flex justify-content-lg-end pt-lg-0 justify-content-center pt-3 '>
                        <div className='px-2 text-white'><IoLogoLinkedin></IoLogoLinkedin></div>
                        <div className='px-2 text-white'><FaInstagram></FaInstagram></div>
                        <div className='px-2 text-white'><FaTwitter></FaTwitter></div>
                        <div className='px-2 text-white'><FaFacebookF></FaFacebookF></div>
                    </Col>
                </Row>
                </Container>
            </footer>







            {/* ===================End footer============== */}
      
   
       
        
        
        
        
        </>
    )
}
export default Footer;