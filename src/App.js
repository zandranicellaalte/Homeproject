import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Todo List</h2>
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
                <TodoList todos={todos} setTodos={setTodos} />
            </header>
        </div>
    );
}

export default App;
