import { type SubmitEventHandler, useEffect, useState, } from "react";
import JokeTotalList from "./components.Task-2/JokeTotalList.tsx";
import type { JokeApiResponse, Task } from "./Type";
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

  const [jokes, setJokes] = useState<string[]>([])

  const getJokes = async () => {
    const url = 'https://api.chucknorris.io/jokes/random'

    const promises = Array.from({ length: 5 }, () => fetch(url))

    const responses = await Promise.all(promises)

    const data: JokeApiResponse[] = await Promise.all(
      responses.map((response) =>
        response.json()
      ));

    const jokesArray = data.map((item) => item.value);

    setJokes(jokesArray);
  }

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
        <JokeTotalList
          jokes={jokes}
          getJokes={getJokes}
        />
      </div>
    </div>
  );
};

export default App;