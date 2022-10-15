import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import GalleryPortion from '../../Components/GalleryPortion';
import {Button} from "reactstrap"


function Gallery(props) {
    return (
        <div>
            <div style={{ height: "13vh" }}></div>
            <Navbar />
            <GalleryPortion />
            <Footer />
        </div>
    );
}

export default Gallery;