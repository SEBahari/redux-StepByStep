import React, { useReducer, createContext } from "react";

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

export const TodoContext = createContext();

export default function TodoContextProvider( { children } ) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
