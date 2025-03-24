import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import TodoList from './components/TodoList';

function App() {
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    axios.get("/api/hello")
        .then((response) => setMessage(response.data)) 
        .catch((error) => console.error("Error : ", error));
  })

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
