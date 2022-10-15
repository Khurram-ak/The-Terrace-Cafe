import React from 'react';
import "./index.css"
// import Particles from "react-particles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Col, Row } from 'reactstrap';

import menu1 from "../../assets/images/menu1.png"
import menu2 from "../../assets/images/menu2.png"
import menu3 from "../../assets/images/menu3.png"
import {Slide} from "react-reveal"

function MenuPortion(props) {


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
                        <p style={{ fontSize: "40px", fontFamily: "PoppinsBold", color: "white" }}>MENU</p>
                        <p style={{ fontSize: "15px", fontFamily: "PoppinsMed", color: "white" }}>Order the food you love</p>
                    </Col>
                </Row>
            </Container>

        </Container>

        <Container style={{ backgroundColor: "#070B20" }} fluid>
            <Row>
                <Col lg="4" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide duration={2500} left>
                        <img className='imgZoom' src={menu1} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>
                </Col>



                <Col lg="4" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide duration={2500} top>
                        <img className='imgZoom' src={menu3} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>
                </Col>


                <Col lgmd="4" style={{ display: "flex", justifyContent: "center" }}>
                    <Slide duration={2500} right>
                        <img className='imgZoom' src={menu2} alt="" style={{ height: "70%", width: "80%", borderRadius: "10px" }} />
                    </Slide>
                </Col>

            </Row>

        </Container>


    </>

}

export default MenuPortion;