import React, { useState } from 'react';
import "./index.css"
// import Particles from "react-particles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Col, Row } from 'reactstrap';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import {IoLogoWhatsapp} from 'react-icons/io'
import ReactWhatsapp from 'react-whatsapp';

function ReservationPortion(props) {

    const [name,setName]=useState("")

   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        window.location.replace(`https://wa.me/923343612310?text=Name: ${data.name},
        Date: ${data.date},
        Phone: ${data.number},
        Email: ${data.email},
        Phone: ${data.number},
        Message: ${data.message}
        `)
         
    }

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

            <Container style={{ zIndex: "10", position: 'absolute', top: "100px", left: "50px", width: "50%" }}>
                <Row style={{ display: "flex", justifyContent: "center" }} >
                    <Col >
                        <p style={{ fontSize: "40px", fontFamily: "PoppinsBold", color: "white" }}>Reservation</p>
                        <p style={{ fontSize: "15px", fontFamily: "PoppinsMed", color: "white" }}>Order the food you love</p>
                    </Col>
                </Row>
            </Container>

        </Container>
        <br></br>

        <Container style={{ height: " ", backgroundColor: "white", padding: "50px 0px" }}>
            <Row >
                <Col className='bookingTitle' >
                    <h2 style={{fontFamily:"PoppinsBold",fontSize:"28px"}}>Book Your Table Now</h2>
                </Col>

            </Row>
            <br></br>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md="4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TextField onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Your Name*" variant="outlined" type="text" placeholder="" {...register("name", { required: true, maxLength: 30 })} /><br></br>
                        <TextField id="outlined-basic" label="Number Of Persons*" variant="outlined" type="number"   {...register("persons", { required: true, maxLength: 30 })} /><br></br>
                        <TextField id="outlined-basic" label="Date" variant="outlined" type="text"  {...register("date", { required: true, maxLength: 30 })} /><br></br>
                    </Col>
                    <Col md="4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                        <TextField id="outlined-basic" label="Mobile number" variant="outlined" type="tel"  {...register("number", { required: true, maxLength: 30 })} /><br></br>
                        <TextField id="outlined-basic" label="Email" variant="outlined" type="email"  {...register("email", { required: false, maxLength: 30 })} /><br></br>

                    </Col>
                    <Col md="4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TextField multiline rows={4} id="outlined-basic" label="Message(Optional)" variant="outlined" type="text"  {...register("message", { required: false, maxLength: 30 })} />
                    </Col>
                </Row>
                <br></br>
                <Row style={{ display: "flex", justifyContent: "center", width: " 150px", margin: "auto" }}>
                    
                <button className='bookingBtn' type='submit' >
                    <p id="aTag">Submit</p> 
                    </button>
                 
                </Row>

            </form>
        </Container>

        <Container  >
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

export default ReservationPortion;