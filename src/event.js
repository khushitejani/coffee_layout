import React from "react";
import Header from "./Header";
import { Container,Row,Col,} from 'react-bootstrap';
import Subheader from "./subheader";
import { FaAngleRight,FaLocationDot, } from "react-icons/fa6";
import { MdSmartphone,MdOutlineEventBusy,} from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaSearch,FaChevronLeft,FaFax,FaChevronDown, } from "react-icons/fa";
import Footer from "./footer";

function Event(){
  return(
  <div>
      <Header></Header>
      {/* =========================START SUB HEADER===================== */}
      
     <Container fluid className='gx-0'>
                <Row className='subheader  gx-0 'xs={1} xl={2}>
                    <Col className='sub_header_title text-lg-start text-center' style={{fontFamily:'Montserrat, sans-serif'}} ><h3 className='fs-2 fw-bold'>Event</h3></Col>
                    <Col className='subheader_txt text-xl-end text-lg-start  text-center '><span><a className='text-black fw-normal fs-4' style={{fontFamily:'Playfair Display, serif'}}>Home</a><FaAngleRight></FaAngleRight><a style={{fontFamily:'Playfair Display, serif'}} className="fs-4 text-dark" >Event</a></span></Col>
                </Row>
                </Container>
          
      {/* =========================eND SUB HEADER===================== */}
      <Container>
        <Row  style={{paddingTop:'150px'}}>
            <Col style={{position:'relative'}}><input type="text"   style={{border:'1px solid rgba(0,0,0,.2)', width:'100%'}} className="py-4"></input>
     
         <div style={{color:'rgb(139,197,198)', fontSize:'30px', position:'absolute', top:'10px', left:'30px'}} className="my-auto"><FaSearch></FaSearch></div>
            
                    <button className="click_btn d-none d-md-block" style={{ position:'absolute', top:'-20px', right:'180px'}}> FIND EVENTS</button>
                    <div style={{color:'rgba(0,0,0,.7)', position:'absolute', top:'10px', right:'60px'}} className="fs-3 mt-auto ps-3">month</div>
             
            
       
            </Col>
     
        </Row >
        <Row className="pt-5">
            <Col><FaChevronLeft></FaChevronLeft><button style={{color:'rgba(0,0,0,.5)', border:'1px solid rgba(0,0,0,.3)',padding:'2PX 10PX',marginLeft:'15px', backgroundColor:'white'}}>Today</button><span style={{fontSize:'25px', paddingLeft:'20px'}}>JANUARY 2024<FaChevronDown className="ps-2"></FaChevronDown></span></Col>
        </Row>
        <Row className="pt-4">
            <Col><div className="text-center py-2" style={{backgroundColor:'rgba(0,0,0,.1)'}}><MdOutlineEventBusy style={{fontSize:'30px'}}></MdOutlineEventBusy>There are no upcoming Event</div></Col>
        </Row>
    <Row className="pt-5">
        <Col><h1>Latest  Past Events</h1></Col>
    </Row>
    <Row  xs={1}>
        <Col className="pt-5">
                   <div className="d-flex">
                   <div>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>JUN</div>
                        <h1 className="my-0 ps-2" style={{fontSize:'18px' }}>11</h1>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>2022</div>


                    </div>
                    <div className="ps-5">
                        <div>11.06.2022 @ 08:00 - 17:00</div>
                        <h4>Good day!</h4>
                    </div>
                   </div>
        </Col>
        <Col className="pt-5">
                   <div className="d-flex">
                   <div>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>MAY</div>
                        <h1 className="my-0 ps-2" style={{fontSize:'18px' }}>15</h1>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>2022</div>


                    </div>
                    <div className="ps-5">
                        <div>11.06.2022 @ 08:00 - 17:00</div>
                        <h4>Good day!</h4>
                    </div>
                   </div>
        </Col>
        <Col className="py-5">
                   <div className="d-flex">
                   <div>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>MAY</div>
                        <h1 className="my-0 ps-2"style={{fontSize:'18px' }}>5</h1>
                        <div style={{fontSize:'10px', paddingLeft:'5px'}}>2022</div>


                    </div>
                    <div className="ps-5">
                        <div>11.06.2022 @ 08:00 - 17:00</div>
                        <h4>Good day!</h4>
                    </div>
                   </div>
        </Col>
    </Row>
      </Container>

      {/* ================start footer=========== */}

      <Footer></Footer>
      {/* ================End footer=========== */}
      






  </div>
    



  )


} 
export default Event;