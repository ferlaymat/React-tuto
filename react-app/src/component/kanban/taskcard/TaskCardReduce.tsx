import styles from "./TaskCard.module.css";
import { type Task } from "../shared/model/Types.ts";
import { useBoardContext } from "../board/context/BoardContext.ts";

//define interface to allow communication with parent component
interface Props {
  task: Task;
}

//define a task card component.
function TaskCardReduce({ task }: Props) {
  const { dispatch } = useBoardContext();

  return (
    <div className={styles.card}>
      <p>{task.title}</p>
      <span className={`${styles.badge} ${styles[task.priority]}`}>
        {task.priority}
      </span>
      <div className="actions">
        <button
          onClick={() => dispatch({ type: "MOVE", id: task.id, direction: -1 })}
        >
          ←
        </button>
        <button
          onClick={() => dispatch({ type: "MOVE", id: task.id, direction: +1 })}
        >
          →
        </button>
        <button onClick={() => dispatch({ type: "DELETE", id: task.id })}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskCardReduce;
