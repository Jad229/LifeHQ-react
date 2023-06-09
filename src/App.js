import { useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Overview task={taskList} />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setTaskList([...taskList, inputValue]);
          setInputValue("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default App;
