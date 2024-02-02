import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';

function Bestday(){

    return(
        <>
        
            {/* ===================start welcome============== */}

            <Container style={{backgroundColor:'#efefef'}} fluid className='px-0 '>
              <Row className='gx-0 pink_cake'>
                          <Col className='sec_1  px-0' >
                          <div  className='cake_txt '>  
                          <div className='position-relative  '> 
                              <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>02</div>
                                                   <div className='' style={{position:'absolute', left:'60px',top:'70px', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'#efefef'}}>WE WELCOMES YOU!</div>
                             
                          </div>
                          <div style={{color:'#8BC5C6'}} className='cake_title'><h5>- beautiful place</h5></div>
                          <p>Feel our warm and cozy atmosphere, where everybody can find aromatic sort of coffee and try our delicious desserts, perfectly coupled with hot coffee. Our stylish interior and friendly staff will make your day!</p>
                          <div style={{color:'#8BC5C6'}} className='cake_title'><h5>- feel the coffee</h5></div>
                          <p>There are more than 100 sorts of high-class coffee in our menu! Freshly ground beans in a small cup will empower you with great mood and thoughts, inspiring you for the whole day.</p>
                          <div style={{color:'#8BC5C6'}} className='cake_title'><h5>- full taste</h5></div>
                          <p>Here, at Arabusta, you are able to taste the most magnificent coffee ever! Our barista will make our special beverages, so you could feel the best coffee taste. Welcome to Arabusta to have your cup of coffee!</p>
                             
                            </div>
                          </Col>
                          <Col className='best_day d-none d-lg-block'></Col>
                      </Row>
                      </Container>






            {/* ===================End welcome============== */}
      
   
       
        
        
        
        
        </>
    )
}
export default Bestday;