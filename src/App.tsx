import "./App.css";
import type { Task } from './Type'
import { type ChangeEvent, type SubmitEventHandler, useEffect, useState } from "react";

const App = () => {

  const [renderList, setRenderList] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {
    console.log('set')
    localStorage.setItem(
      "tasks",
      JSON.stringify(renderList)
    );
  }, [renderList]);

  const [task, setTask] = useState<string>("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    if (!task.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: task,
    };

    setRenderList([...renderList, newTask]);

    setTask("");
  };

  const handleDelete = (id: string) => {
    setRenderList(
      renderList.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h1 className="mb-4 text-center">Todo Cinema App</h1>

        <form
          onSubmit={handleSubmit}
          className="d-flex gap-2 mb-4"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Add new task..."
            value={task}
            onChange={(
              event: ChangeEvent<HTMLInputElement>
            ) => setTask(event.target.value)}
          />

          <button className="btn btn-primary">
            Add
          </button>
        </form>

        <ul className="list-group">
          {renderList.map((item, index) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {index + 1}. {item.text}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;