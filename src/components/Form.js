
import React, {useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

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
       e.preventDefault();
     setTodos([
       ...todos,
       { text: inputText, completed: false, id: Math.random() * 1000 },
       
     ]);
    setInputText(' ')     
     
   };
   
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  
  
  return (
    <>
      <div className={"flex justify-center mt-10  "}>
        <div className={"border w-3/4 rounded-lg"}>
          <div
            className={"flex gap-2 justify-center p-4 bg-blue-400 rounded-lg"}
          >
            <form className="text-center">
              <input
                placeholder={"Task..."}
                value={inputText}
                onChange={inputTextHandler}
                type={"text"}
                className={
                  " w-full   pr-20 rounded-xl z-0 focus:shadow focus:outline-none"
                }
              />
              <button
                onClick={submitTodoHandler}
                className={"rounded  pr-5"}
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