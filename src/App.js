import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Box, Typography } from "@mui/material";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const styles = {
        titel: {
            marginRight: "280px",
            marginBottom: "5px",
        },
    };

    return (
        <Box className="App">
            <Box className="App-header">
                <Typography sx={styles.titel} variant="h3">
                    Todo List
                </Typography>
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
                <TodoList todos={todos} setTodos={setTodos} />
            </Box>
        </Box>
    );
}

export default App;
