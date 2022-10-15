import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import MenuPortion from '../../Components/MenuPortion';
import { Button, Col, Container, Row } from "reactstrap"
import whatsapp from "../../assets/images/whatsapp.png"
import { IoLogoWhatsapp } from "react-icons/io"
import ReactWhatsapp from 'react-whatsapp';


function Menu() {
    return <>
        <div>
            <div style={{ height: "13vh" }}></div>
            <Navbar />
            <MenuPortion />
            <Footer />
            <Container  >
                <Row  >
                    <ReactWhatsapp className='orderBtn' number="923343612310" message="Hello, I would like to order:" >

                        <div className='orderRow' >
                            <IoLogoWhatsapp size={26} />
                            <p style={{ paddingTop: "16px", paddingLeft: "10px" }}>Order Now</p>

                        </div>

                    </ReactWhatsapp>
                </Row>
            </Container>
        </div>

    </>
}

export default Menu;