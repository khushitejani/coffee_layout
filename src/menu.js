import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';

function Menu(){

    return(
        <>
        
            {/* ===================start welcome============== */}

            <Container style={{backgroundColor:'#efefef'}} fluid className='px-0 pt-5 pb-5'>
                <Row  className='gx-0 menu'>
                    <Col  className="num_pad">
                   
                    <div className='position-relative  '> 
                        <div className='number ' style={{fontSize:'90px',fontFamily:' Montserrat, sans-serif', fontWeight:'bolder', color:'#8BC5C6', }}>04</div>
                                             <div className='' style={{position:'absolute', left:'60px',top:'70px', fontSize:'30px',fontWeight:'bold', fontFamily:'Montserrat, sans-serif',backgroundColor:'#efefef'}}>OUR COFFEE MENU</div>
                      </div>
                    </Col>
                </Row>
                <Row className='gx-0 menu_txt ' xl={2} sm={1}>
                    <Col className='px-5 pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- caffe latte</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$2.95</div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                        <button className='menu_btn'>New</button>
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- iced caffe mocha</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$2.95</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                       
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- cappuccino</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$2.95</div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                       
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- white chocolate mocha</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$5.95</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                        
                    </div>
                    </Col><Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- iced caramel latte</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$2.05</div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                     
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- iced smoked latte</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$6.00</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                        <button className='menu_btn'>New</button>
                    </div>
                    </Col><Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- caramel mocchiato</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$7.35</div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                        <button className='menu_btn'>New</button>
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- ised gingerbread latte</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$2.19</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                    
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- espresso macchiato</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$9.23</div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                    </div>
                    </Col>
                    <Col className='px-5  pt-3'>
                    <div className='menu_line d-flex justify-content-between'>
                        <h3 style={{color:'#8BC5C6'}} className=''>- frappuccino</h3>
                        <div className='fs-4 fw-bolder ps-3' style={{fontFamily:' Montserrat, sans-serif',}}>$5.25</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='ps-5'>Fresh brewed coffee and steamed milk</p>
                    
                    </div>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col className='text-center'><button className='click_btn'>VIEW ALL MENU</button></Col>
                </Row>

            </Container>






            {/* ===================End welcome============== */}
      
   
       
        
        
        
        
        </>
    )
}
export default Menu;