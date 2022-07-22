import React from "react";
import { gsap } from "gsap";

import "./index.scss";
function Rectangle(props) {
  const { useEffect, useRef } = React;

  const el = useRef();
  const q = gsap.utils.selector(el);
  useEffect(() => {
  gsap.to(q(".rectangle"), {
    y: 100,
    stagger: 0.33,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });
}, []);
  return (
    <div className="container rectangle" ref={el}>
      <h5>{props.h5}</h5>
      <p>{props.p}</p>
    </div>
  );
}

export default Rectangle;
