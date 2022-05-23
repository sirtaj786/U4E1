import React, { useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks";

import AddTask from './AddTask/AddTask'
import jdata from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[todo,setTodo]= React.useState(jdata)
  const newfun=(item)=>{

    setTodo(...todo,item)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask newfun={newfun}/>
      {/* Tasks */}
      < Tasks todo={todo}/>
    </div>
  );
};

export default TaskApp;
