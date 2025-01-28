import "./Toggle.css";
import { useState } from "react";
const ToggleBgColor = () => {
  const [backgroundColor, setbackgroundColor] = useState("white");
  const [textcolor, settextcolor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");

  function handelClick() {
    setbackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white")
    settextcolor(textcolor === "#1b1b1b" ? "#ffa41a" : "#1b1b1b")
    setbuttonStyle(backgroundColor === "white" ? "#1b1b1b" : "white")
  }
  return (
    <div style={{ backgroundColor, color: textcolor }}>
      <button
        onClick={handelClick}
        style={{
          buttonStyle,
          color: textcolor,
          border: `2px solid ${textcolor}`,
        }}
      >{backgroundColor == "#1b1b1b" ? 'Black Theme' : 'White Theme'}</button>
        <section className="content">
            <h1>Welcome to a real world</h1>
        </section>
    </div>
  );
};

export default ToggleBgColor;
