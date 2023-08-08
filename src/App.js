import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';

function Todo() {
  return null;
}

function App() {
  return (
    <div className = "container is fluid">
      <h1 className = "title">Todoo Appp</h1>
      <Todo />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

export default App;
