
import styles from "./tasks.module.css";
import Task from "../Task/Task";


const Tasks = ({todo}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        <Task todo={todo}/>
        {/* Task List */}
        {/* <Task  /> */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      
      </div>
    </>
  );
};

export default Tasks;
