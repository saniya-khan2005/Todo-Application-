import Todo from "./components/Todo";

function App() {
  return (
    <div className="page bg-light">
      <div className="card">
        <h1>My Tasks</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
