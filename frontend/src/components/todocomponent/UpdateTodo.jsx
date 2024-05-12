import React from "react";

const UpdateTodo = ({display}) => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3 className="text">Update Your Task</h3>
      <input type="text" className="todo-inputs my-4 w-100 p-3" />
      <textarea name="" className="todo-inputs w-100 p-3" />
      <div>
        <button className="btn btn-dark my-4">update</button>
        <button className="btn btn-danger mx-3 my-4" onClick={()=>{display("none")}}>close</button>
      </div>
    </div>
  );
};

export default UpdateTodo;
