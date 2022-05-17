import "./App.css";
import { TaskList } from "./components/TaskList";
import { Navbar } from "./components/Navbar";
import { TaskAdder } from "./components/TaskAdder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList />
      <TaskAdder />
      <p>
        Created by donblizy -{" "}
        <a className="diclaimer" href="https://github.com/donblizy">
          <FontAwesomeIcon className="fa" icon={faOtter} />
        </a>
      </p>
    </div>
  );
}

export default App;
