import { useState } from "react";
import "./Counter.css" 
const Counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button className="increment" onClick={()=>setcount(count + 1 )}> + </button>
        <button className="increment" onClick={()=>setcount(0)}> Reset </button>
        <button className="increment" onClick={()=>setcount(count > 0 ? count - 1 : count )}> - </button>
      </div>
    </div>
  )
}

export default Counter