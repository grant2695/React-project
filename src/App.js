import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState,useEffect } from 'react'; 
import  ReactDOM from 'react';
import Todo from './components/todo';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";



function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  ///Run once when the App starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  ///
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className=" w-screen flex justify-start bg-sky-800 p-3">
          <div className="text-white p-2 hover:bg-cyan-700 rounded ">
            <Link to="/About">About</Link>
          </div>
          <div className="text-white p-2 hover:bg-cyan-700 rounded ">
            <Link to="/Contact">Contact</Link>
          </div>
          <div className="text-white p-2 hover:bg-cyan-700 rounded ">
            <Link to="/Form">Todos</Link>
          </div>
        </div>

        <Routes>
          <Route
            path="/Form"
            element={
              <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                filteredTodos={filteredTodos}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact
               
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;