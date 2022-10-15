import React from 'react';
import banner from "../../assets/images/banner.png"
import "./index.css"
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../assets/images/logo2.png"

import Fade from 'react-reveal/Fade';

function HomeBanner() {
    return <>
        <div className='homeBanner'>
            <Container
                fluid="md"
            >
                <Row >
                        <Col className='homeleftCol' md='6'>
                    <Fade duration={2500} left>
                            <div>
                                <h3 style={{ fontSize: "70px", fontFamily: "Ephesis", color: "white" }}>
                                    The
                                </h3>
                                <h3 style={{ fontSize: "70px", fontFamily: "Ephesis", color: "white" }}>
                                    Terrace
                                </h3>
                                <h3 style={{ fontSize: "70px", fontFamily: "Ephesis", color: "white" }}>
                                    Cafe
                                </h3>
                            </div>

                    </Fade>
                        </Col>

                    <Col className='homerightCol' md='6'>
                    <Fade duration={2500} right>
                        <div  >
                            <img src={logo1} width={200} style={{ borderRadius: "12px" }} />
                        </div>
                        </Fade >
                    </Col>


                </Row>
            </Container>

        </div>

    </>
}

export default HomeBanner;