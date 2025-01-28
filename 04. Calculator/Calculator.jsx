import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setinput] = useState("");
  function handelChange(e) {
    setinput(e.target.value);
  }
  function clear() {
    setinput("");
  }
  function handelForm(e) {
    e.preventDefault() ;
  }
  function display(value) {
    setinput(value + input)
  }
  function calculate() {
    let final;
     try {
     final = eval(input)
    } catch (error) {
      final = "Error"
    };
    setinput(final);
  }
  return (
    <form className="calculator" name="calc" onSelect={handelForm}>
      <input
        type="text"
        className="value"
        value={input}
        onChange={handelChange}
      />
      <span className="num clear" onClick={clear}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calculator;
