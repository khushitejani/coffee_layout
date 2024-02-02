import App from './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,} from 'react-bootstrap';
import Header from './Header';
import Menu from './menu';
import Subheader from './subheader';
import Footer from './footer';

function Menupg(){

    return(
        <>
        {/* ==============start header====== */}
        <Header></Header>
        {/* ==============end header====== */}
            {/*========================= start menupg background ================*/}

            <Subheader></Subheader>



            {/* ========================start menupg background ===============*/}



            {/* ===================start welcome============== */}

                <Menu></Menu>



            {/* ===================End welcome============== */}
            {/* =============start footer========== */}
            <Footer></Footer>
            {/* =======End footer============ */}
      
   
       
        
        
        
        
        </>
    )
}
export default Menupg;