import React from 'react';
import "./index.css"
// import Particles from "react-particles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Col, Row } from 'reactstrap';
import {Slide} from "react-reveal"
import logo1 from "../../assets/images/logo2.png"

function AboutPortion(props) {


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

            <Container style={{ zIndex: "10", position: 'absolute', top: "100px", left: "50px", width: "70%" }}>
                <Row style={{ display: "flex", justifyContent: "center" }} >
                    <Col >
                        <p style={{ fontSize: "40px", fontFamily: "PoppinsBold", color: "white" }}>About Us</p>
                        <p style={{ fontSize: "15px", fontFamily: "PoppinsMed", color: "white" }}>Order the food you love</p>
                    </Col>
                </Row>
            </Container>
        </Container>

        <Container className='aboutCont' >
            <Row  >
                <Col className='aboutLeftCont'   md="6">
                    <Slide left>
                   <div >
                   <span id='aboutTitle' style={{fontSize:"30px",fontFamily:"PoppinsBold",lineHeight:"2px"}}>The Terrace Cafe
                        </span> is a fantastic location to unwind with friends and family including authentic wall art to relax your mind. We accommodate you the best of Expeditious Victuals, Chinese,
                    Steaks including Mocktails, Coffee, Iced-Tea in beverages, we’re confident you’ll be back for more.
                   </div>

                    </Slide>
                    </Col>
                <Col className='aboutRightCont' md="6" >
                    <Slide right>
                    <div  >
                        <img src={logo1} width={200} style={{ borderRadius: "12px" }} />
                    </div>

                    </Slide>

                </Col>


            </Row>
        </Container>



    </>

}

export default AboutPortion;