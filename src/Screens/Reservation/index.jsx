import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import ReservationPortion from '../../Components/ReservationPortion';
import {Button} from "reactstrap"

function Reservation() {
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <ReservationPortion/>
        <Footer/>  
     </div>
    
    </>
}

export default Reservation;