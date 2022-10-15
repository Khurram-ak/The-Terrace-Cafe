import React from 'react';
import "./index.css"
// import Particles from "react-particles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Col, Row } from 'reactstrap';

import gallery1 from "../../assets/images/gallery1.jpeg"
import gallery2 from "../../assets/images/gallery2.jpeg"
import gallery3 from "../../assets/images/gallery3.jpeg"
import gallery4 from "../../assets/images/gallery4.jpeg"
import {IoLogoWhatsapp} from "react-icons/io"
import ReactWhatsapp from 'react-whatsapp';

import {Slide} from "react-reveal"

function GalleryPortion(props) {


    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    const options = {
        preset: "stars",
    };


    return <>
        <Container fluid style={{ backgroundColor: "#070B20", position: "relative" }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#070B20",

                        },
                    },
                    fpsLimit: 80,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            // onHover: {
                            //     enable: true,
                            //     mode: "repulse",
                            // },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                    fullScreen: {
                        zIndex: 0,
                        enable: false // this is the line to change
                    },
                }}
            />

            <Container style={{ zIndex: "2", position: 'absolute', top: "100px", left: "50px", width: "50%", margin: "auto" }}>
                <Row style={{ display: "flex", justifyContent: "center" }} >
                    <Col >
                        <p style={{ fontSize: "40px", fontFamily: "PoppinsBold", color: "white" }}>Gallery</p>
                        <p style={{ fontSize: "15px", fontFamily: "PoppinsMed", color: "white" }}>Order the food you love</p>
                    </Col>
                </Row>
            </Container>

        </Container>

        <Container style={{ backgroundColor: "#070B20" }} fluid>
            <Row>
                <Col lg="6" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide left>
                        <img className='imgZoom' src={gallery1} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>

                </Col>

                <Col lg="6" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide right>
                        <img className='imgZoom' src={gallery3} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>

                </Col>

                <Col lg="6" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide left>
                        <img className='imgZoom' src={gallery2} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>

                </Col>

                <Col lg="6" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide right>
                        <img className='imgZoom' src={gallery4} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>

                </Col>

            </Row>

        </Container>
        <Container   >
                <Row  >
                    <ReactWhatsapp className='orderBtn' number="923343612310" message="Hello, I would like to order:" >

                    <div className='orderRow' >
                        <IoLogoWhatsapp size={26}/>
                        <p style={{paddingTop:"16px",paddingLeft:"10px"}}>Order Now</p>

                    </div>

                    </ReactWhatsapp>
                   
                </Row>
            </Container>

    </>

}

export default GalleryPortion;