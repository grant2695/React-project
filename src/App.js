import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react'; 
import  ReactDOM from 'react';
import Todo from './components/todo';

function App() {
  const [inputText,setInputText]= useState(" ");
 const [todos,setTodos] = useState([])
  return (
    <div className='App'>
    
  
    <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText} />
    
    </div>
   
  );
}


export default App;
