import React from "react";
import "./Todo.css";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const TodoCards = ({ title, body,id, delid, display }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="todo-card-icon update px-2 py-1 icon-onhover" onClick={()=>{display("block")}}>
          <GrDocumentUpdate />
          Update
        </div>
        <div className="todo-card-icon del px-2 py-1   icon-onhover" onClick={()=>{delid(id)}}>
          <AiFillDelete />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
