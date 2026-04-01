import { useState } from "react";
import styles from "./AddTaskForm.module.css";
import type { Priority } from "../shared/model/Types";
import { useBoardContext } from "../board/context/BoardContext";

//we remove useless prop
function AddTaskForm() {
  //we use the context
  const { dispatch } = useBoardContext();
  //declare useState to manage change
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const handleSubmit = (e: React.SubmitEvent) => {
    //mandatory on a form to avoid to reload the page on submit(default browser behavior)
    e.preventDefault();
    //if no title, we do not continue
    if (!title.trim()) return;
    //else we call the handler to add the task
    dispatch({ type: "ADD", title: title.trim(), priority: priority });
    //then we reset default values for the form
    setTitle("");
    setPriority("medium");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button className={styles.button} type="submit" disabled={!title.trim()}>
        Add
      </button>
    </form>
  );
}

export default AddTaskForm;
