import {  useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ThemeContext } from "../contexts/ThemeContext";

export const TaskCard = ({ task }) => {
  const { isLightTheme, setIsLightTheme, toggleTheme } =
    useContext(ThemeContext);
  const theme = isLightTheme.isLightTheme
    ? isLightTheme.light
    : isLightTheme.dark;
  const { removeTask } = useContext(TaskContext);
  return (
    <li
      style={{ background: theme.ui }}
      className="title"
      onClick={() => {
        removeTask(task.id);
      }}
    >
      <div>{task.title}</div>
    </li>
  );
};
