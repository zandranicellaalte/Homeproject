import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Box, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const styles = {
        titel: {
            marginRight: "280px",
            marginBottom: "5px",
        },
        menu: {
            position: "absolute",
            zIndex: "1",
            top: "0",
            right: "0",
            margin: "20px 20px 0 0",
        },
    };

    return (
        <Box className="App">
            <Box className="App-header">
                <Button sx={styles.menu}>
                    <Icon
                        icon="ci:hamburger"
                        color="var(--main-text-primary-color)"
                        width="50"
                    />
                </Button>
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
