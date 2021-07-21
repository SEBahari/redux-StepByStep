import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { TodoContext } from "../../Context/TodoContext/TodoContext";

export default function TodoItem( { checkItem, todoId } ) {
  const { dispatch } = useContext(TodoContext);
  return (
    <Form.Group
      className="mb-3"
      controlId={`checkItem${todoId}${checkItem.id}`}
    >
      <Form.Check
        checked={checkItem.isDone}
        type="checkbox"
        label={checkItem.title}
        onChange={() => dispatch({
          type: "change_isDone_status",
          payload: { todoId, checkId: checkItem.id },
        })}
      />
    </Form.Group>
  );
};