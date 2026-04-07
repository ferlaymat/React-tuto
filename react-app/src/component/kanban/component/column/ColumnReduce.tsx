import { type Task } from "../../shared/model/Types.ts";
import TaskCardReduce from "../taskcard/TaskCardReduce.tsx";

//we remove useless properties
interface Props {
  title: string;
  items: Task[];
}

function ColumnReduce({ title, items }: Props) {
  return (
    <>
      <p>{title}</p>
      <ul className="list-group">
        {items.map((item) =>
          // we add the condition to display the task only if correspondant column name
          item.column === title ? (
            <li className="list-group-item" key={item.id}>
              <TaskCardReduce task={item} />
            </li>
          ) : null,
        )}
      </ul>
    </>
  );
}

export default ColumnReduce;
