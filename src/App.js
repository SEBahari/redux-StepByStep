import React, { useReducer } from "react";
import Todo from "./Components/Todo/Todo";

const initialState = {
  todoList: [
    {
      id: 1, title: "todo 1", description: "about todo 1", checkList: [
        { id: 1, title: "check1", isDone: false },
        { id: 2, title: "check2", isDone: true },
        { id: 3, title: "check3", isDone: false },
      ],
    },
    {
      id: 2, title: "todo 2", description: "about todo 2", checkList: [
        { id: 1, title: "check1", isDone: true },
        { id: 2, title: "check2", isDone: false },
        { id: 3, title: "check3", isDone: true },
      ],
    },
    {
      id: 3, title: "todo 3", description: "about todo 3", checkList: [
        { id: 1, title: "check1", isDone: false },
        { id: 2, title: "check2", isDone: true },
        { id: 3, title: "check3", isDone: false },
      ],
    },
  ],
};

function reducer( state, action ) {
  switch ( action.type ) {
    case "remove_todo":
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload),
      };
    case "add_todo":
      return {
        ...state,
        todoList: [ ...state.todoList, action.payload ],
      };
    case "change_isDone_status":
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.todoId ? {
          ...todo,
          checkList: todo.checkList.map(checkItem => checkItem.id === action.payload.checkId ? {
            ...checkItem, isDone: !checkItem.isDone,
          } : checkItem),
        } : todo),
      };
    default:
      return state;
  }
}

/* ************************************************************************** */
function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleNew = () => {
    const id = Date.now();
    const title = prompt("title?");
    const description = prompt("description?");
    const checkList = [
      { id: 1, title: "check1", isDone: false },
      { id: 2, title: "check2", isDone: false },
      { id: 3, title: "check3", isDone: false },
    ];
    dispatch({
      type: "add_todo",
      payload: { id, title, description, checkList },
    });
  };

  return (
    <div className={"container-fluid pt-3 "}>
      <div className={"d-flex justify-content-end"}>
        <button
          className={"btn btn-primary"}
          onClick={handleNew}
        >add new
        </button>
      </div>
      <hr/>
      <Todo
        todoList={state.todoList}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
