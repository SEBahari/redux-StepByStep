import React from "react";
import Todo from "./Components/Todo/Todo";
import { useDispatch } from "react-redux";
import { addTodo } from './store/Todo.Reducer/Todo.actions'

/* ************************************************************************** */
function App() {
  const dispatch = useDispatch();

  const handleNew = () => {
    const id = Date.now();
    const title = prompt("title?");
    const description = prompt("description?");
    const checkList = [
      { id: 1, title: "check1", isDone: false },
      { id: 2, title: "check2", isDone: false },
      { id: 3, title: "check3", isDone: false },
    ];
    dispatch(addTodo({ id, title, description, checkList }));
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
      <hr />
      <Todo />
    </div>
  );
}

// function mapStateToProps( state ) {
//   const { todo } = state;
//   return { todoList: todo.todoList };
// }

export default App;
