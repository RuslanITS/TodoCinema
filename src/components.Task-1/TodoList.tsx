import type { Task } from "../Type";
import TodoItem from "./TodoItem";

type Props = {
  renderList: Task[];
  handleDelete: (id: string) => void;
  handleEdit: (
    id: string,
    value: string
  ) => void;
};

const TodoList = ({renderList, handleDelete, handleEdit,}: Props) => {
  return (
    <>
      {renderList.length > 0 ? (
        <ul className="list-group">
          {renderList.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted">
          Please enter at least one task
        </p>
      )}
    </>
  );
};

export default TodoList;