import React from 'react';
import { Container, Row, Col } from "reactstrap"
import "./index.css"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ImMap } from "react-icons/im"

function Footer(props) {
    return <>
        <div className='footer'>
            <Container style={{ height: "auto" }}>
                <Row>
                    <Col className='location' style={{ padding: "40px 20px" }} lg="4">
                        <h3 style={{cursor:"pointer", fontSize: "20px", fontFamily: "PoppinsBold", color: "white" }}>Location</h3>
                        <br></br>
                        <div style={{ fontSize: "12px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                            <FaMapMarkerAlt size={15} />
                            <p style={{cursor:"pointer" ,paddingLeft: "7px", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}> B-72 Block L North Nazimabad, Karachi </p>

                        </div>
                        <div style={{ fontSize: "12px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                            <ImMap size={15} />
                            <a href='https://maps.app.goo.gl/Gw6LBQ9Dqe9pmmSR9?g_st=ic' style={{cursor:"pointer" ,paddingLeft: "7px", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}>https://maps.app.goo.gl/Gw6LBQ9Dqe9p
                            <br></br>mmSR9?g_st=ic</a>

                        </div>


                    </Col>
                    <Col className='timings' style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center" }} lg="4">
                        <h3 style={{cursor:"pointer", fontSize: "20px", fontFamily: "PoppinsBold", color: "white" }}>Cafe Timings</h3>
                        <br></br>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <p style={{cursor:"pointer", fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Monday </p>
                            <p style={{cursor:"pointer" ,fontSize: "11px", fontFamily: "PoppinsMed", color: "white" }}>5:30 pm - 2:00 am </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <p style={{ cursor:"pointer",fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Tueday - Thursday </p>
                            <p style={{ cursor:"pointer",fontSize: "11px", fontFamily: "PoppinsMed", color: "white" }}>5:00 pm - 2:00 am </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <p style={{ cursor:"pointer",fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Friday - Sunday </p>
                            <p style={{ cursor:"pointer",fontSize: "11px", fontFamily: "PoppinsMed", color: "white" }}>5:00 pm - 4:00 am </p>
                        </div>

                    </Col>
                    <Col className='contact' style={{ padding: "40px 20px" }} lg="4">
                        <h3 id='Contact' style={{ cursor:"pointer",fontSize: "20px", fontFamily: "PoppinsBold", color: "white" }}>Contact Us</h3>
                        <br></br>
                        <div style={{ cursor:"pointer",fontSize: "12px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                            <BsFillTelephoneFill size={15} />
                            <p style={{ paddingLeft: "7px",cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}> 0330 8377223</p>

                        </div>

                        <div style={{cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                            <MdEmail size={18} />
                            <p style={{ paddingLeft: "7px",cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}>theterracecafettc@gmail.com</p>

                        </div>
                    </Col>
                </Row>

            </Container>

            <Container fluid style={{ paddingTop: "3px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", height: "40px" }}>
            <Row >
                <h3 style={{ textAlign: "center",cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}>&copy; 2022 The Terrace Cafe | All rights reserved. Powered By <a href="https://www.khurramak.com/">KhurramAk</a>   </h3>

            </Row>
        </Container>
        </div>
       
    </>
}

export default Footer;