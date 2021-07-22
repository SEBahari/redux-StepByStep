import types from './Todo.types'
import { addNewTodo, removeTodo, updateStatus } from './Todo.utils';

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

export default function todoReducer(state = initialState, action) {
  switch (action.type) {

    case types.REMOVE_TODO:
      return removeTodo(state, action)

    case types.ADD_TODO:
      return addNewTodo(state, action)

    case types.CHANGE_STATUS:
      return updateStatus(state, action)

    default:
      return state;

  }
}

