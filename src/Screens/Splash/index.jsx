import React from 'react';
import "./index.css"
import logo from "../../assets/images/logo1.jpg"
import {Spinner} from "reactstrap"
import { useNavigate } from 'react-router-dom';

function Splash(props) {

    var navigate=useNavigate()

    setTimeout(() => {
        navigate("/home")
    }, 2000);


    return (
        <div className='Splash'>
           <img src={logo} width={300} style={{borderRadius:"12px"}}/> 
           <Spinner style={{margin:"15px 0px", height:"60px",width:"60px",color:"rgb(15, 52, 88)"}}></Spinner>
        </div>

    );
}

export default Splash;