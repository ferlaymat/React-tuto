import { useNavigate } from "react-router-dom";
import AddTaskFormReduce from "../../form/AddTaskFormReduce.tsx";
import { useMemo } from "react";
import { BoardContext } from "./context/BoardContext.ts";
import useTasks from "../../shared/hooks/UseTasks.ts";
import ColumnReduce from "../column/ColumnReduce.tsx";

function BoardHttp() {
  const columnList = ["To-do", "In progress", "Done"];

  const nav = useNavigate();

  const navigate = () => {
    nav("/");
  };

  const { tasks, dispatch, loading, error } = useTasks(columnList);

  //recompute only if inputs has changed
  const value = useMemo(() => ({ tasks, dispatch }), [tasks]);
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
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

export default BoardHttp;
