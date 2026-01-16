import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);

    setTask("");
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1, marginRight: "8px" }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.map((t, index) => (
        <div className="task-item" key={index}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleComplete(index)}
          />
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              flex: 1,
            }}
          >
            {t.text}
          </span>
          <button onClick={() => deleteTask(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
