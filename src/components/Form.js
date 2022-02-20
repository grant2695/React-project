
import React, {useState, useEffect } from "react";

import Todo from "./todo";

const Form = ({
  setInputText,
  setStatus,
  todos,
  setTodos,
  text,
  inputText,
  todo,
  status,
  filteredTodos,
  setFilteredTodos,
}) => {
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };
   const submitTodoHandler = (e) => {
       
     setTodos([
       ...todos,
       { text: inputText, completed: false, id: Math.random() * 1000 },
       
     ]);
     setInputText.reset();
     e.preventDefault();
   };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  
  
  return (
    <>
      <div className=" w-screen flex justify-start bg-black p-4">
        <div className="text-white p-2 hover:bg-blue-400">About</div>
        <div className="text-white p-2 hover:bg-blue-400">Contact</div>
        <div className="text-white p-2 hover:bg-blue-400">Tasks</div>
      </div>

      <div className={"flex justify-center mt-20 "}>
        <div className={"border w-3/4"}>
          <div className={"flex gap-3 justify-center p-4"}>
            <form>
              <input
                onChange={inputTextHandler}
                type={"text"}
                className={"border w-2/3 px-1 outline-none rounded"}
                placeholder={"Task..."}
              />
              <button
                onClick={submitTodoHandler}
                className={" border p-1  w-1/4  rounded"}
                type={"submit"}
              >
                <i class="fas fa-plus-square"></i>
              </button>
            </form>
          </div>
          <form>
            <div className="d-flex">
              <div className="select text-center p-2">
                <select
                  onChange={statusHandler}
                  name="todos"
                  className=" border filter-todo border-blue-400 rounded"
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
            </div>
          </form>
          <div className={"flex justify-between px-4 bg-blue-100 p-2 border-b"}>
            <div>
              <span className={"ml-2 text-sm font-bold"}>Todo</span>
            </div>
            <div>
              <ul className="ml-3">
                <li>done/delete</li>
              </ul>
            </div>
          </div>
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;