import { useState } from "react";

type TodoItemPropsType = {
  title: string;
  id: number;
  deleteItem: (id: number) => void;
  updateItem: (title: string, id: number) => void;
  editItem: (id: number) => void;
  selectedId: number;
};
const TodoItem: React.FC<TodoItemPropsType> = (props) => {
  let { title, id, deleteItem, updateItem, editItem, selectedId } = props;
  const [updatedTitle, setUpdatedTitle] = useState(title);

  return (
    <div className="todoItem">
      {selectedId == id ? (
        <input
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        ></input>
      ) : (
        <p>{title}</p>
      )}
      <div>
        {selectedId == id ? (
          <button onClick={() => updateItem(updatedTitle, id)}>Update</button>
        ) : (
          <div>
            <button onClick={() => editItem(id)}>Edit</button>
            <button onClick={() => deleteItem(id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
