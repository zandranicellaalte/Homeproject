import React from "react";
import Todo from "./Todo";
import { Box, List } from "@mui/material";

const TodoList = ({ todos, setTodos }) => {
    return (
        <Box>
            <List>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoText={todo.text}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
