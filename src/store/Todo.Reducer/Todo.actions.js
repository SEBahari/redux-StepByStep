import types from './Todo.types'
export const addTodo = ({ id, title, description, checkList }) => ({
   type: types.ADD_TODO,
   payload: { id, title, description, checkList },
});