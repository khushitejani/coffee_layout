import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';

function Morning(){

    return(
        <>
        
            {/* ===================start welcome============== */}

            <Container style={{backgroundColor:'#efefef'}} fluid className='px-0 pt-5 '>
                <Row className='gx-0 morning'>
                    <Col className='sec_1 ' >
                    <div  className='cake_txt '>  
                    <div className='position-relative  '> 
                        <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>03 </div>
                                             <div className='' style={{position:'absolute', left:'60px',top:'70px', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'#efefef'}}>A SPECIAL MORNING MOMENT</div>
                       
                    </div>
                    <div style={{color:'#8BC5C6'}} className='cake_title'><h5>book your table now</h5></div>
                    <p>Discover your special morning cup of coffee here at Arabusta! We will offer you aromatic blend of arabica and orient spices. Our regular clients adore this morning routine and come to us everyday for the next portion of coffee. Our menu includes various special beverages you can try!
Call us or contact online to book a table for your perfect meeting with friends! You will have your great time at Aromecafe over coffee and dessert.</p>
                     
                      <button className='click_btn'>READ MORE</button>  
                      </div>
                    </Col>
                </Row>

            </Container>






            {/* ===================End welcome============== */}
      
   
       
        
        
        
        
        </>
    )
}
export default Morning;