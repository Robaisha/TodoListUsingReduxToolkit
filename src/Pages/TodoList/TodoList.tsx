import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TodoItem } from "../../component/TodoItem";
import {
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../store/reducer/TodoItemSlice";
import { RootState } from "../../store/store";

const TodoList = () => {
  const dispatch = useDispatch();
  const TodoListArray = useSelector(
    (state: RootState) => state.TodoItem.TodoListArray
  );
  const [title, setTitle] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number>(0);

  const updateItem = (title: string, id: number) => {
    dispatch(updateTodo({ title, id }));
    setSelectedId(0);
  };
  const editItem = (id: number) => {
    setSelectedId(id);
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
          <div key={`todoitem-${key}`}>
            <TodoItem
              title={obj.title}
              id={obj.id}
              updateItem={updateItem}
              deleteItem={deleteItem}
              editItem={editItem}
              selectedId={selectedId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
