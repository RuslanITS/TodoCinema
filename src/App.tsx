import "./App.css";
import { type SubmitEventHandler, useEffect, useState, } from "react";
import type { Task } from "./Type";

import TodoForm from "./components.Task-1/TodoForm";
import TodoList from "./components.Task-1/TodoList";

const App = () => {
  const [renderList, setRenderList] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(renderList)
    );
  }, [renderList]);

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

  const handleEdit = (
    id: string,
    value: string
  ) => {
    setRenderList(
      renderList.map((item) =>
        item.id === id
          ? { ...item, text: value }
          : item
      )
    );
  };

  const [joke, setJoke] = useState('')

  const getJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random'

    const response = await fetch(url)
    const data = await response.json()

    const totalJoke: string = data.value

    setJoke(totalJoke)
  }

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">
          Todo Cinema App
        </h2>

        <TodoForm
          task={task}
          setTask={setTask}
          handleSubmit={handleSubmit}
        />

        <TodoList
          renderList={renderList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <h1>{joke}</h1>
    </div>
  );
};

export default App;