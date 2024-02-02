import React from "react";
import Header from "./Header";
import { Container,Row,Col,} from 'react-bootstrap';
import Subheader from "./subheader";
import { FaAngleRight,FaLocationDot, } from "react-icons/fa6";
import { MdSmartphone } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";

function Contact(){
  return(
  <div>
      <Header></Header>
      {/* =========================START SUB HEADER===================== */}
      
     <Container fluid className='gx-0'>
                <Row className='subheader  gx-0 'xs={1} xl={2}>
                    <Col className='sub_header_title text-lg-start text-center' style={{fontFamily:'Montserrat, sans-serif'}} ><h3 className='fs-4 fw-bold'>CONTACT</h3></Col>
                    <Col className='subheader_txt text-xl-end text-lg-start  text-center '><span><a className='text-black fw-normal fs-4' style={{fontFamily:'Playfair Display, serif'}}>Home</a><FaAngleRight></FaAngleRight><a style={{fontFamily:'Playfair Display, serif'}} >cONTACT</a></span></Col>
                </Row>
                </Container>
            <Container className="py-5">             
                   <Row xxl={3} lg={2} xs={1}  className="px-auto">
                    <Col className="d-flex"><div style={{letterSpacing:'2px', paddingRight:'20px', textTransform:'uppercase', fontSize:'60px', fontWeight:'bolder',color:'rgb(139,197,198)'}}><MdSmartphone></MdSmartphone></div>
                  <div>
                  <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'20px', paddingTop:'20px', fontWeight:'bolder',color:'rgb(139,197,198)'}}>CALL TODAY</div>
                    <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'30px', fontWeight:'bolder'}}>+800 <b>123 4567</b></div>
                    
                  </div>
                    </Col>
               
                    <Col className="d-flex"><div style={{letterSpacing:'2px',  paddingRight:'20px', textTransform:'uppercase', fontSize:'60px', fontWeight:'bolder',color:'rgb(139,197,198)'}}><FaFax></FaFax></div>
                  <div>
                  <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'20px',paddingTop:'20px', fontWeight:'bolder',color:'rgb(139,197,198)'}}>FAX US</div>
                    <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'30px', fontWeight:'bolder'}}>+800 <b>123 4567</b></div>
                    
                  </div>
                    </Col>
               
                
                    <Col className="d-flex "><div style={{letterSpacing:'2px',  paddingRight:'20px', textTransform:'uppercase', fontSize:'60px', fontWeight:'bolder',color:'rgb(139,197,198)'}}><MdSmartphone></MdSmartphone></div>
                  <div>
                  <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'20px',color:'rgb(139,197,198)'}}>
EMAIL US</div>
                    <div style={{letterSpacing:'2px', textTransform:'uppercase', fontSize:'30px'}} className="email">info@company.com</div>
                    
                  </div>
                    </Col>
               </Row>
            </Container>
            <Container fluid className="contact">
                <Row lg={1} xxl={2} xl={2}>
                <Col  className="num_pad bg-dark " >
                   
                   <div className='position-relative  '> 
                       <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>01</div>
                                            <div className='' style={{position:'absolute', left:'60px',top:'70px',color:'white', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'black'}}>CONTACT DETAILS</div>
                     </div>
                     <p  className="text-white">If you are interested in working with us then please drop us a line, we would love to hear from you.</p>
                     <div className="d-flex pt-5 text-center"> 
                        <div><FaLocationDot style={{color:'rgb(139,197,198)',fontSize:'30px'}}></FaLocationDot></div>
                        <div style={{color:'white', fontSize:'20px',paddingLeft:'10px'}}> 121 Wallstreet Street, New York , USA</div>
                     </div>
                     <div className="d-flex pt-5 text-center"> 
                        <div><CiMail style={{color:'rgb(139,197,198)',fontSize:'30px',marginTop:'15px'}}></CiMail></div>
                        <div style={{color:'white', fontSize:'20px',paddingLeft:'10px', fontWeight:'bolder',fontSize:'30px'}}>info@company.com</div>
                     </div>
                     <div className="d-flex pt-4 text-center"> 
                        <div><IoMdPhonePortrait style={{color:'rgb(139,197,198)',fontSize:'40px',marginTop:'15px' }}></IoMdPhonePortrait></div>
                        <div style={{color:'white', fontSize:'20px',paddingLeft:'10px',fontWeight:'bolder' ,fontSize:'30px'}}> +800 1234 56 78</div>
                     </div>
                   </Col>
                   <Col  style={{paddingLeft:'30px'}}>
                    
                   <div className='position-relative  '> 
                       <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>02</div>
                                            <div className='' style={{position:'absolute', left:'60px',top:'70px',color:'white', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'black'}}>DROP US A LINE</div>
                     </div>
                     <div style={{color:'rgba(0,0,0,0.5)',paddingBottom:'15px',paddingLeft:'',marginBottom:'40px', borderBottom:'1px solid rgba(0,0,0,.5)',}}>Name</div>
                     <div style={{color:'rgba(0,0,0,0.5)',paddingBottom:'15px',paddingLeft:'',marginBottom:'40px', borderBottom:'1px solid rgba(0,0,0,.5)',}}>E-Mail</div>
                     <div style={{color:'rgba(0,0,0,0.5)',paddingBottom:'50px',paddingLeft:'',marginBottom:'40px', borderBottom:'1px solid rgba(0,0,0,.5)',}}>Message</div>
                    <button className="click_btn">SEND MESSAGE</button>
                   </Col>
                </Row>
            </Container>

      {/* =========================eND SUB HEADER===================== */}
      






  </div>
    



  )


}
export default Contact;