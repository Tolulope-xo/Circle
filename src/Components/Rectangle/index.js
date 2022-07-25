import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./index.scss";
const { useEffect} = React;

const Rectangle = (props)=> {
  useEffect(() => {
    Aos.init({});
  }, []); 
  
  return (
    <div data-aos="fade-up-left" data-aos-duration="800" className="container rectangle">
      <h5>{props.h5}</h5>
      <p>{props.p}</p>
    </div>
  );
}

export default Rectangle;
