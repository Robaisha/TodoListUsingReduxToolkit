import { useState } from "react";
import { TodoItem } from "../../component/TodoItem";
import { addTodo } from "../../store/reducer/TodoItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../../store/reducer/TodoItemSlice";
import { RootState } from "../../store/store";

const TodoList = () => {
  const dispatch = useDispatch();
  const TodoListArray = useSelector(
    (state: RootState) => state.TodoItem.TodoListArray
  );
  const [title, setTitle] = useState<string>("");

  const updateItem = (title: string, id: number) => {
    dispatch(updateTodo({ title, id }));
  };
  const deleteItem = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input
        placeholder="Create task"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addTodo({ title }))}>Add Task</button>
      {TodoListArray.map((obj, key) => {
        return (
          <div key={key}>
            <TodoItem
              title={obj.title}
              id={obj.id}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
