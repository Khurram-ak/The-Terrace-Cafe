import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import AboutPortion from '../../Components/AboutPortion';
import {Button} from "reactstrap"

function About() {
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <AboutPortion/>
        <Footer/>  
     </div>
    
    </>
}

export default About;