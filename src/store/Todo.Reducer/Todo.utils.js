export const updateStatus = (state, action) => ({
   ...state,
   todoList: state.todoList.map(todo => todo.id === action.payload.todoId ? {
      ...todo,
      checkList: todo.checkList.map(checkItem => checkItem.id === action.payload.checkId ? {
         ...checkItem, isDone: !checkItem.isDone,
      } : checkItem),
   } : todo),
});

export const addNewTodo = (state, action) => ({
   ...state,
   todoList: [...state.todoList, action.payload],
});

export const removeTodo = (state, action) => ({
   ...state,
   todoList: state.todoList.filter(todo => todo.id !== action.payload),
});