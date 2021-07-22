import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.todoList);
  return (
    <>
      {
        todoList.map(todo => (
          <div key={todo.id}>
            <h3 className={"d-flex justify-content-between"}>
              {todo.title.toUpperCase()}
              <button
                className={"ms-1 btn btn-danger btn-sm"}
                onClick={() => dispatch({ type: "remove_todo", payload: todo.id })}
              >delete
              </button>
            </h3>
            <p>{todo.description}</p>
            <div className={"ps-4"}>
              {todo.checkList.map(checkItem => (
                <TodoItem
                  key={`${todo.id}${checkItem.id}`}
                  todoId={todo.id}
                  checkItem={checkItem}
                />
              ))}
            </div>
            <hr />
          </div>
        ))
      }
    </>
  );
};

export default Todo;