import { Button } from "@material-ui/core";
import React from "react";
import Drawer from "./drawer";
import "./Navbar.css";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { TbMapPin } from "react-icons/tb";
import logo from "../../assets/images/logo1.jpg"
import {useNavigate} from "react-router-dom"


function Navbar() {

  var navigate=useNavigate();


  return (
    <div className="navbar2">
      <div className="links">
        <span>
          <img src={logo} width={150}/>
          <a onClick={()=>{navigate("/")}}   className="link">
            Home
          </a>
          <a onClick={()=>{navigate("/menu")}}  className="link">
            Menu
          </a> 
          <a onClick={()=>{navigate("/reservation")}} className="link">
            Reservation
          </a> 
          <a  onClick={()=>{navigate("/gallery")}}  className="link">
            Gallery
          </a> 
          <a  onClick={()=>{navigate("/about")}}  className="link">
            About
          </a>
          <a href="#Contact" className="link">
            Contact
          </a>
        </span>
       
      </div>
      {/* <div className="social_links">
        <a
          href="https://github.com/Khurram-ak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbMapPin className="social_icon" />
        </a>
      </div> */}
      {/* {window.innerWidth > 800 ? ( */}
  
      <Drawer className="drawer" />
    </div>
  );
}

export default Navbar;
