import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const localData = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(localData ? JSON.parse(localData) : []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((currTasks) => {
      return [...currTasks, { title: task, id: uuidv4() }];
    });
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
