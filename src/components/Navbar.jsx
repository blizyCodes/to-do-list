import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TaskContext } from "../contexts/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  const { isLightTheme, setIsLightTheme, toggleTheme } =
    useContext(ThemeContext);
  const theme = isLightTheme.isLightTheme
    ? isLightTheme.light
    : isLightTheme.dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <button className="themeButton" onClick={toggleTheme}>
        {isLightTheme.isLightTheme ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <h1>My To Do List</h1>
      <p>
        {tasks.length > 0
          ? `Currently you have ${tasks.length} tasks to do..Piece of cake.`
          : `You are done for now - good job!`}
      </p>
    </nav>
  );
};
