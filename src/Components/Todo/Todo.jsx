import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const Todo = ( { todoList, dispatch } ) => {
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
                  todoItem={todo}
                  checkItem={checkItem}
                  dispatch={dispatch}
                />
              ))}
            </div>
            <hr/>
          </div>
        ))
      }
    </>
  );
};

export default Todo;