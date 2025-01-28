import { useState } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [task, settask] = useState("");
  const [Alltasks, setAlltasks] = useState([]);

  function Add() {
    if (task.trim() !== "") {
      setAlltasks([...Alltasks, task]);
      settask("");
    }
  }
  function delettask(id) {
    setAlltasks(Alltasks.filter((task,index)=> index !== id))
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Task :"
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={Add}>Add Task</button>
      <ul className="todos-list">
        {Alltasks.map((task, index) => {
          return (
            <li className="todo" key={index}>
              {task} <button className="close" onClick={()=>{delettask(index)}}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
