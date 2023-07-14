type TodoItemPropsType = {
  title: string;
  id: number;
  deleteItem: (id: number) => void;
  updateItem: (title: string, id: number) => void;
};
const TodoItem: React.FC<TodoItemPropsType> = (props) => {
  let { title, id, deleteItem, updateItem } = props;
  return (
    <div>
      <ul>
        <li key={id}>
          <p>{title}</p>
          <button onClick={() => updateItem(title, id)}>Update</button>
          <button onClick={() => deleteItem(id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
