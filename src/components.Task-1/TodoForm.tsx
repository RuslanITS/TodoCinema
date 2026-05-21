import type {
  ChangeEvent,
  SubmitEventHandler,
} from "react";

type Props = {
  task: string;
  setTask: (value: string) => void;
  handleSubmit: SubmitEventHandler<HTMLFormElement>;
};

const TodoForm = ({
                    task,
                    setTask,
                    handleSubmit,
                  }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex gap-2 mb-4"
    >
      <input
        type="text"
        className="form-control"
        placeholder="Add new task..."
        value={task}
        maxLength={20}
        onChange={(
          event: ChangeEvent<HTMLInputElement>
        ) => setTask(event.target.value)}
      />

      <button className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default TodoForm;