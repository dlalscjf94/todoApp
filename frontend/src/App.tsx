import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

function App() {
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    axios.get("/api/hello")
        .then((response) => setMessage(response.data)) 
        .catch((error) => console.error("Error : ", error));
  })

  return (
    <div>
      <h1>todo App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
