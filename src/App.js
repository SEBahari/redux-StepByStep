import React, { useContext } from "react";
import Todo from "./Components/Todo/Todo";
import { TodoContext } from "./Context/TodoContext/TodoContext";

/* ************************************************************************** */
function App() {
  const { dispatch } = useContext(TodoContext);

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
      <Todo/>
    </div>
  );
}

export default App;
