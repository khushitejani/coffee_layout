import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdWidthFull } from 'react-icons/md';

function Warm(){
   

    return(
        <>
        
            {/* ===================start welcome============== */}

            <Container style={{backgroundColor:'#efefef'}} fluid className='px-0'>
                <Row className='gx-0 ' xl={2} xs={1}>
                    <Col className='px-5 w-xl-25'><OwlCarousel className='owl-theme' style={{paddingLeft:'100px ',paddingTop:'50px'}} autoPlay={true}  margin={10} items={1} nav dots={false}>
    <div class='item'>
        <img src={require('./image/asset 1.jpeg')} style={{width:'100%'}}  ></img>
    </div>
    <div class='item'>
    <img src={require('./image/asset 2.jpeg')}></img>
    </div>
    <div class='item'>
    <img src={require('./image/asset 3.jpeg')}></img>
    </div>
    <div class='item'>
    <img src={require('./image/asset 4.jpeg')}></img>
    </div>

</OwlCarousel></Col>
                    <Col className='sec_1 ps-5' >
                    <div  className='cake_txt '>  
                    <div className='  position-relative'> 
                        <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>05</div>
                                             <div className='' style={{position:'absolute', top:'80px' ,left:'60px', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'#efefef'}}>
WARM & FRIENDLY AMBIANCE</div>
                       
                    </div>
                    <div style={{color:'#8BC5C6', left:'670px'}} className='lg-cake_title' ><h5>try the best coffee in the city
</h5></div>
                    <p>If you love coffee as much as we do, you should definitely visit us and have your cup of coffee! Here, at Arabusta, you will find the best fresh-roast coffee, brewed and made with love. We will add some spices, milk and other secret ingredients to make your day perfect with us!</p>
                     
                      <button className='click_btn'>VIEW GALLARY</button>  
                      </div>
                    </Col>
                </Row>

            </Container>






            {/* ===================End welcome============== */}
      
   
       
        
        
        
        
        </>
    )
}
export default Warm;