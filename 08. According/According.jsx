import "./According.css";
import { useState } from "react";

const According = ({ title, content }) => {
  const [isActive, setisActive] = useState(false);
  return (
    <section key={Math.random} className="accordion-card">
      <div className="header" onClick={() => setisActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">{isActive && <p className="card-info">{content}</p>}</div>
    </section>
  );
};

export default According;
