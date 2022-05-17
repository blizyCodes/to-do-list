import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ThemeContext } from "../contexts/ThemeContext";

export const TaskAdder = () => {
  const { addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");
  const { isLightTheme, setIsLightTheme, toggleTheme } =
    useContext(ThemeContext);
  const theme = isLightTheme.isLightTheme
    ? isLightTheme.light
    : isLightTheme.dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <label htmlFor="taskToAdd">Task to add: </label>
      <input
        style={{ background: theme.bg, color: theme.syntax }}
        id="taskToAdd"
        type="text"
        placeholder="task's name"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        required
      />
      <input type="submit" value="add Task" aria-label="add" />
    </form>
  );
};
