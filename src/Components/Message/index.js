import React, { useState } from "react";
// import Button from "../Button";
import shadow from "../assets/Ellipse.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.scss";
const { useEffect } = React;

const Message = () => {
  const [Name, setName] = useState('');  

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert('Thanks for subscribing!');
    setName('');
}
useEffect(() => {
  Aos.init({});
}, []); 

  return (
    <div className="blur"  data-aos="fade-up" data-aos-duration="700" >
      <h4>Want to be aware of all update</h4>
      <img className="shadow5" src={shadow} alt="shadow" />
          <form className="text" onSubmit={handleSubmit}>
            <input 
            type="email" 
            value={Name} 
            placeholder="" 
            onChange={(e) => setName(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Subscribe</button>
          </form>
      <img className="shadow6" src={shadow} alt="shadow" />
    </div>
  );
};

export default Message;
