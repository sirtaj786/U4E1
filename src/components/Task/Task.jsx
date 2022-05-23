import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
//import jdata from "../../data/tasks.json"

const Task = ({todo}) => {
  return todo.map((item)=>{
    return (
      <li data-cy="task" className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" />
        <p>{item.text}</p>
        <div data-cy="task-text"></div>
        {/* Counter here */}
        <Counter/>
        <button data-cy="task-remove-button" >X</button>
      </li>
    );
  })
  // NOTE: do not delete `data-cy` key value pair
 /// console.log(data1)
  //const[]
  
};

export default Task;
