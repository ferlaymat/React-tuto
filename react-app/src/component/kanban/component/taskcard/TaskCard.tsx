import styles from "./TaskCard.module.css";
import { type Task } from "../../shared/model/Types.ts";

//define interface to allow communication with parent component
interface Props {
  task: Task;
  //event to notify the parent to move the card to another column
  onMove: (id: number, direction: number) => void;
  //event to notify the parent to remove the card from the board
  onDelete: (id: number) => void;
}

//define a task card component.
function TaskCard({ task, onMove, onDelete }: Props) {
  return (
    <div className={styles.card}>
      <p>{task.title}</p>
      <span className={`${styles.badge} ${styles[task.priority]}`}>
        {task.priority}
      </span>
      <div className="actions">
        <button onClick={() => onMove(task.id, -1)}>←</button>
        <button onClick={() => onMove(task.id, +1)}>→</button>
        <button onClick={() => onDelete(task.id)}>✕</button>
      </div>
    </div>
  );
}

export default TaskCard;
