import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HomeBanner from '../../Components/HomeBanner';
import Footer from '../../Components/Footer';
import {Button} from "reactstrap"

function Home() {
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <HomeBanner/> 
        <Footer/>  
     </div>
    
    </>
}

export default Home;