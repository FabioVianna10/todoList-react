import React, { useState } from "react";
import style from "../public/css/style.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className={style.title}>Todo List</h1>
      <div className={style.container}>
        <input
          className={style.input}
          type="text"
          placeholder="Adicione uma tarefa"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button className={style.btn} onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className={style.container_list}>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTodo(index)} className={style.btn_remove}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
