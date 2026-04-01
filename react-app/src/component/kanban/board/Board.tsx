import Column from "../column/Column";
import { useNavigate } from "react-router-dom";
import type { Task, Priority } from "../shared/model/Types.ts";
import AddTaskForm from "../form/AddTaskForm.tsx";
import UseLocalStorage from "../shared/hooks/UseLocalStorage.ts";

function Board() {
  const columnList = ["To-do", "In progress", "Done"];
  let items: Task[] = [
    { id: 1, title: "Create structure", column: "Done", priority: "high" },
    { id: 2, title: "Add state", column: "In progress", priority: "high" },
    { id: 3, title: "Connect API", column: "To-do", priority: "medium" },
  ];

  const nav = useNavigate();

  const navigate = () => {
    nav("/");
  };

  //call Hook which calls useState and useEffect
  //states will be stored at each change the reload at the page rendering
  const [tasks, setTasks] = UseLocalStorage("kanban-tasks", items);

  const addTask = (title: string, priority: Priority) => {
    setTasks((prev: Task[]) => [
      ...prev,
      {
        id: Date.now(),
        title: title,
        priority: priority,
        column: "To-do",
      },
    ]);
  };

  const moveTask = (id: number, direction: number) => {
    setTasks((prev: Task[]) =>
      prev.map((t: Task) => {
        //select task by id in the list
        if (t.id !== id) return t;
        //get current id of the column
        const idx = columnList.indexOf(t.column);
        //compute the new index bounded by 0 and length - 1
        const nouvelIdx = Math.max(
          0,
          Math.min(columnList.length - 1, idx + direction),
        );
        //set the name of the column in the task
        return { ...t, column: columnList[nouvelIdx] };
      }),
    );
  };

  const deleteTask = (id: number) => {
    //filtering list but not delete element
    setTasks((prev: Task[]) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <AddTaskForm onAdd={addTask} />
      <div className="container">
        <div className="row">
          {columnList.map((columnName, index) => (
            <div className="col" key={index}>
              <Column
                title={columnName}
                items={tasks}
                onMove={moveTask}
                onDelete={deleteTask}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={navigate}>
        Home
      </button>
    </>
  );
}

export default Board;
