import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Gallery from "../Screens/Gallery";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Menu from "../Screens/Menu";
import Reservation from "../Screens/Reservation";
import Splash from "../Screens/Splash";

export default function Routing() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Splash/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
         
        </Routes>
      </div>
    </Router>
  );
}