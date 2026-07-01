import { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Load tasks from Local Storage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      setError("Please enter a task.");
      return;
    }

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);

    setTask("");
    setError("");
  };

  // Toggle Complete
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete Single Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Clear Completed Tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Task Counters
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      {/* Input Section */}
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          style={{ flex: 1, marginRight: "8px" }}
        />

        <button onClick={addTask}>Add</button>
      </div>

      {/* Error Message */}
      {error && (
        <p
          style={{
            color: "red",
            marginTop: "-8px",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}

      {/* Task Counter */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "15px",
          fontSize: "14px",
        }}
      >
        <p>
          <strong>Total Tasks:</strong> {totalTasks}
        </p>

        <p>
          <strong>Completed:</strong> {completedTasks}
        </p>

        <p>
          <strong>Pending:</strong> {pendingTasks}
        </p>
      </div>

      {/* Clear Completed Button */}
      <button
        onClick={clearCompleted}
        style={{
          width: "100%",
          marginBottom: "15px",
          backgroundColor: "#d32f2f",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clear Completed
      </button>

      {/* Task List */}
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