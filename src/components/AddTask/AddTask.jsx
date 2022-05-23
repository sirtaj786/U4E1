import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({newfun}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[task,setTask]=useState("")
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={(e)=>{
        setTask(e.target.value)
      }} placeholder='Add Task..'/>
      <button data-cy="add-task-button" onClick={()=>{
        newfun(task)
        setTask("")
      }}>+</button>
    </div>
  );
};

export default AddTask;
