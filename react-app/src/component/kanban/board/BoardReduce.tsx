import ColumnReduce from "../column/ColumnReduce.tsx";
import { useNavigate } from "react-router-dom";
import type { Task } from "../shared/model/Types.ts";
import AddTaskFormReduce from "../form/AddTaskFormReduce.tsx";
import { useEffect, useMemo, useReducer } from "react";
import BoardReducer from "./reducer/BoardReducer.ts";
import { BoardContext } from "./context/BoardContext.ts";

function BoardReduce() {
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
  //try lazyloading
  const initial =
    JSON.parse(localStorage.getItem("reduce-tasks") ?? "null") ?? items;
  const [tasks, dispatch] = useReducer(BoardReducer(columnList), initial);
  // Synchronize loacal storage at each change
  useEffect(() => {
    localStorage.setItem("reduce-tasks", JSON.stringify(tasks));
  }, [tasks]);
  //recompute only if inputs has changed
  const value = useMemo(() => ({ tasks, dispatch }), [tasks]);

  return (
    <>
      {/* encapsulate with a context to avoid to prop drill */}
      <BoardContext.Provider value={value}>
        <AddTaskFormReduce />
        <div className="container">
          <div className="row">
            {columnList.map((columnName, index) => (
              <div className="col" key={index}>
                <ColumnReduce title={columnName} items={tasks} />
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={navigate}>
          Home
        </button>
      </BoardContext.Provider>
    </>
  );
}

export default BoardReduce;
