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
function Home(){
    return(
        <div>
        {/* ======================= start Heade'slider_secr==================== */}
        <Header></Header>
        {/* =========================End header====================== */}

        {/* =======================start slider============================= */}
                <Container fluid className='gx-0'>
               <Row className='gx-0 '>
                <Col className='slider_sec'>
                <img src={slider} className='w-100 slider'></img>
                <Col className='slider_txt'>life happens coffee helps</Col>
                </Col>
               </Row>
                </Container>
        {/* =======================End slider============================= */}
        {/* =====================start welcome sec========================== */}
           {/* <Welcome></Welcome> */}
        {/* =====================End welcome sec========================== */}
        
        {/* ==================== start  best day================== */}
        <Bestday></Bestday>
       {/* ==============================End best day ==============*/}
        
        {/* ===================start morning================= */}
            <Morning></Morning>
        {/* ===================End morning================= */}
        {/* ===============Menu============== */}
                       <Menu></Menu>
        {/* ===============Menu============== */}
        {/* ================== End warm================ */}
        <Warm></Warm>
        {/* =================start warm============== */}
        {/* =====================start footer================= */}
        <Footer></Footer>
        {/* =====================End footer================= */}
        
        
        
        
        </div>
    );
}
export default Home;