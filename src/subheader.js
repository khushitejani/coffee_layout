import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa6";


function Subheader(){

    return(
        <>
        
     {/*========================= start menupg background ================*/}

     <Container fluid className='gx-0'>
                <Row className='subheader  gx-0 'xs={1} xl={2}>
                    <Col className='sub_header_title text-lg-start text-center' style={{fontFamily:'Montserrat, sans-serif'}} ><h3 className='fs-4 fw-bold'>MENU</h3></Col>
                    <Col className='subheader_txt text-xl-end text-lg-start  text-center '><span><a className='text-black fw-normal fs-4' style={{fontFamily:'Playfair Display, serif'}}>Home</a><FaAngleRight></FaAngleRight><a style={{fontFamily:'Playfair Display, serif'}} >Menu</a></span></Col>
                </Row>
            </Container>



            {/* ========================start menupg background ===============*/}
   
       
        
        
        
        
        </>
    )
}
export default Subheader;