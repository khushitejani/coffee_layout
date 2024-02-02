import React from 'react'
import Header from './Header';
import Footer from './footer';
import { Container,Row,Col,} from 'react-bootstrap';
import slider from './image/asset 15.svg';
// import welcome_sec
import Bestday from './best_day';
import Morning from './Morning';
import Menu from './menu';
import Warm from './warm';
import { FaAngleRight,FaLocationDot, } from "react-icons/fa6";
// import {  } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdSmartphone,MdOutlineEventBusy} from "react-icons/md";
import { FaSearch,FaChevronLeft,FaFax,FaChevronDown, } from "react-icons/fa";


function News(){
    return(
        <div>
        {/* ======================= start Heade'slider_secr==================== */}
        <Header></Header>
        {/* =========================End header====================== */}

        {/* =============start welcome=================== */}
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



        {/* =============End welcome=================== */}
     
       
        {/* ===================start form================= */}
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

        {/* ===================End form================= */}
        {/* ===============Menu============== */}
                       <Menu></Menu>
        {/* ===============Menu============== */}
       
        {/* =====================start footer================= */}
        <Footer></Footer>
        {/* =====================End footer================= */}
        
        
        
        
        </div>
    );
}
export default News;