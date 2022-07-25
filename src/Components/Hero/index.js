import React from "react";
import { gsap } from "gsap";
import Rectangle from "../Rectangle";
import shape from "../assets/Illustration.png"
import shadow from "../assets/Ellipse.png"
import './index.scss'
import Aos from "aos";
import "aos/dist/aos.css";
  const { useEffect, useRef } = React;

  const Hero = () => {
    const shadow2Ref = useRef();
    useEffect(() => {
      Aos.init({});
    }, []); 
    
    useEffect(() => {
      
      gsap.to(shadow2Ref.current, {
        y: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
      }, );
    }, []);

  return (
    <div className=" container hero3">
    <img className="shadow2" ref={shadow2Ref} src={shadow} alt="shadow"/>
      <h2>Global Decentralize currency based on blockchain technology</h2>
      <p className="heroes">Web3 is the latest efficient technology</p>
      <img className="shadow3" src={shadow} alt="shadow"/>
      <div className="hero">
      <div className="hero1" data-aos="zoom-in" data-aos-duration="800">
      <img src ={shape} alt=""/>
      </div>
      <div className="hero2">
      <Rectangle 
      h5= "Access Token Market"
      p="Buy and sell token anytime
      and anywhere"
      />
      <Rectangle
      h5= "User Friendly Interface "
      p="Easy to navigate"
      />
      <Rectangle
      h5= "Ownership Token control"
      p="Be in control and own as many
      asset as possible"
      />
      </div>
      </div>
    </div>
  );
}

export default Hero;
