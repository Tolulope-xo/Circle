import React from 'react'
import bitcoin from '../assets/Coin Trend Item.png'
import eth from '../assets/Coin Trend Item (1).png'
import bnb from '../assets/Coin Trend Item (2).png'
import usdt from '../assets/Coin Trend Item (3).png'
import Aos from "aos";
import "aos/dist/aos.css";
import "./Trend.scss"
const { useEffect } = React;

const Trend=()=> {
  useEffect(() => {
    Aos.init({});
  }, []); 
  return (
    <div data-aos="fade-up" data-aos-duration="900"  className='container crypto'>
        <img src={bitcoin} alt=""/>
        <img src={eth} alt=""/>
        <img src={bnb} alt=""/>
        <img src={usdt} alt=""/>

    </div>
  )
}

export default Trend