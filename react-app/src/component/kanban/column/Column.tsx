import { type Task } from "../shared/model/Types.ts";
import TaskCard from "../taskcard/TaskCard";

interface Props {
  title: string;
  items: Task[];
  onMove: (id: number, direction: number) => void;
  onDelete: (id: number) => void;
}

function Column({ title, items, onMove, onDelete }: Props) {
  return (
    <>
      <p>{title}</p>
      <ul className="list-group">
        {items.map((item) =>
          // we add the condition to display the task only if correspondant column name
          item.column === title ? (
            <li className="list-group-item" key={item.id}>
              <TaskCard task={item} onMove={onMove} onDelete={onDelete} />
            </li>
          ) : null,
        )}
      </ul>
    </>
  );
}

export default Column;
