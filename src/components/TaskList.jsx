import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TaskContext } from "../contexts/TaskContext";
import { TaskCard } from "./TaskCard";
export const TaskList = () => {
  const { tasks, setTasks, addTask, removeTask } = useContext(TaskContext);
  const { isLightTheme, setIsLightTheme, toggleTheme } =
    useContext(ThemeContext);
  const theme = isLightTheme.isLightTheme
    ? isLightTheme.light
    : isLightTheme.dark;

  return tasks.length ? (
    <div
      className="taskList"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div
      className="emptyTaskList"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      No tasks to display. Please add new tasks.
    </div>
  );
};
