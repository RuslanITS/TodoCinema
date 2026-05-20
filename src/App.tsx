import './App.css'

const App = () => {

  const allTasks = [
    { id: 123, text: 'move cinema one' },
    { id: 124, text: 'move cinema two' },
    { id: 125, text: 'move cinema tre' }
  ]

  return (
    <div className="container py-5">

      <div className="card shadow p-4">

        <h1 className="mb-4 text-center">Todo App</h1>

        <form className="d-flex gap-2 mb-4">

          <input
            id="task"
            name="task"
            type="text"
            className="form-control"
            placeholder="Add new task..."
          />

          <button className="btn btn-primary">Add</button>
        </form>

        <ul className="list-group">

          {allTasks.map((task, index) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{index + 1}. {task.text}</span>

              <button className="btn btn-danger btn-sm">Delete</button>
            </li>
          ))}

        </ul>

      </div>

    </div>
  )
}

export default App