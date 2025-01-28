import "./Testimonials.css";
import { useState } from "react";
import {testimonials} from './TestimoialsArray.js'
const Testimonials = () => {
  const [currentindex, setcurrentindex] = useState(0);


  function handelprevclick() {
    if (currentindex >= 0) {
      setcurrentindex(
        (currentindex + testimonials.length - 1) % testimonials.length
      );
    }
  }
  function handelnextclick() {
    setcurrentindex((currentindex + 1) % testimonials.length);
  }
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentindex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentindex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handelprevclick}>Prev</button>
        <button onClick={handelnextclick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
