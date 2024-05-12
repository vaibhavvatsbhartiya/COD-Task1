import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTodo from "./UpdateTodo";

const Todo = () => {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const [array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = () => {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("title and body should not be empty.");
    } else {
      setArray([...array, inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your task is added successfully");
      toast.error("Your task is not saved yet. sign up now");
    }
  };

  const del = (id) => {
    array.splice(id);
    setArray([...array]);
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo-update-kr").style.display = value;
  }
  //   console.log(array);

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex flex-column justify-content-center align-items-center my-4 ">
          <div className="todo-inputs-div d-flex flex-column w-50 p-1">
            <input
              type="text"
              name="title"
              placeholder="TITLE"
              value={inputs.title}
              className="my-2 todo-inputs"
              onClick={show}
              onChange={change}
            />
            <textarea
              name="body"
              value={inputs.body}
              type="text"
              placeholder="Body"
              className="p-2 todo-inputs"
              id="textarea"
              onChange={change}
            />
          </div>
          <div className="w-50 d-flex justify-content-end my-3">
            <button className="btns px-2 py-1 " onClick={submit}>
              Add Task
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="conatiner-fluid">
            <div className="row">
              {array &&
                array.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2 " key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delid={del}
                      display={dis}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update " id="todo-update-kr">
        <div className="container">
          <UpdateTodo display={dis} />
        </div>
      </div>
    </>
  );
};

export default Todo;
