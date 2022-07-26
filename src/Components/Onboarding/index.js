import React from "react"
import { gsap } from "gsap";

import Button from "../Button";
import illustration1 from "../assets/Modern.png";
import shadow from "../assets/Ellipse.png";
import "./index.scss"
import Aos from "aos";
import "aos/dist/aos.css";
const { useEffect, useRef } = React;

const Onboarding = () => {
  const bigimageRef = useRef();
  useEffect(() => {
    Aos.init({});
  }, []); 

  useEffect(() => {
    
    gsap.to(bigimageRef.current, {
      y: 100,
    stagger: 0.33,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
    }, );
  }, []);
  return (
    <div className="container Onboarding">
      <div data-aos="fade-right" data-aos-duration="900" className="Board1">
        <img className="shadow" src={shadow} alt="shadow"/>
        <h2>Save, Buy and Sell Your blockchain asset</h2>
        <p className="Boardp">The easy to manage and trade your cryptocurency asset</p>
        <div className="buttons">
          <Button name="Connect Wallet" />
          <Button color = {"white"} name="Start Trading" />
        </div>
      </div>
      <div className="Board2">
      <img className="bigimage" ref={bigimageRef} src={illustration1} alt="an illustration"/> 
      <img className="shadow1" src={shadow} alt="shadow"/>

      </div>
    </div>
  );
}

export default Onboarding;
