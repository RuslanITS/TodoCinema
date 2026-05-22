import type { ChangeEvent } from "react";
import type { Task } from "../Type";

type Props = {
  item: Task;
  index: number;
  handleDelete: (id: string) => void;
  handleEdit: (
    id: string,
    value: string
  ) => void;
};

const TodoItem = ({item, index, handleDelete, handleEdit,}: Props) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center gap-2"
    >
      <div className="d-flex align-items-center gap-2 w-100">
        <span>{index + 1}.</span>

        <input
          type="text"
          className="form-control"
          value={item.text}
          maxLength={20}
          onChange={(
            event: ChangeEvent<HTMLInputElement>
          ) =>
            handleEdit(
              item.id,
              event.target.value
            )
          }
        />
      </div>

      <button
        onClick={() => handleDelete(item.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;