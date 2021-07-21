import React from "react";
import { Form } from "react-bootstrap";

export default function TodoItem( { checkItem, todoItem, dispatch } ) {
  return (
    <Form.Group
      className="mb-3"
      controlId={`checkItem${todoItem.id}${checkItem.id}`}
    >
      <Form.Check
        checked={checkItem.isDone}
        type="checkbox"
        label={checkItem.title}
        onChange={() => dispatch({
          type: "change_isDone_status",
          payload: { todoId: todoItem.id, checkId: checkItem.id },
        })}
      />
    </Form.Group>
  );
};