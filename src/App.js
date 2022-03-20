import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState,useEffect } from 'react'; 
import  ReactDOM from 'react';
import Todo from './components/todo';
import About from './components/About';
import Contact from './components/Contact';


import { BrowserRouter, Routes, Route, Link,Redirect} from "react-router-dom";



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
  //saves todos to cache
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //checks cache if user added todo items to list and displays if there are saved items in list
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
    <BrowserRouter basename="/React-project">
      <div className="App">
        <div className=" w-screen flex justify-start bg-[#a9a9a9] p-2">
          <a href="#" class="navbar-brand font-['Lobster']">
            <Link to="/React-project/About"> Tasking</Link>
          </a>
          <div className="text-white p-2 hover:bg-gray-700 text-white rounded ">
            <Link to="/React-project/About">About</Link>
          </div>
          <div className="text-white p-2 hover:bg-gray-700 rounded ">
            <Link to="/React-project/Contact">Contact</Link>
          </div>
          <div className="text-white p-2 hover:bg-gray-700 rounded  ">
            <Link to="/">To-do</Link>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
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
          <Route path="/React-project/Contact" element={<Contact />} />
          <Route path="/React-project/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
