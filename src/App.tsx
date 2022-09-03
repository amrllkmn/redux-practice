import React from "react";
import "./App.css";
import { TodoList } from "./features/todos/TodoList";
import { AddTodo } from "./features/todos/AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <AddTodo />
          <TodoList />
        </>
      </header>
    </div>
  );
}

export default App;
