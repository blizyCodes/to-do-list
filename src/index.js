import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import TaskContextProvider from "./contexts/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
