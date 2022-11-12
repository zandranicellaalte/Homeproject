import React from "react";
import { Box, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const Todo = ({ todoText, todo, todos, setTodos }) => {
    const handlerCheck = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                } else {
                    return item;
                }
            })
        );
    };

    const handlerDelete = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const styles = {
        inputContainer: {
            color: "var(--main-bg-secondary-color)",
            backgroundColor: "#145da015",
            width: "470px",
            borderRadius: "5px",
        },
        input: {
            color: "var(--main-bg-secondary-color)",
        },
        inputText: {
            color: "var(--main-text-primary-color)",
            margin: "0 5px",
        },
        icon: {
            color: "var(--main-bg-secondary-color)",
        },
    };

    return (
        <Box>
            <ListItem
                secondaryAction={
                    <IconButton onClick={handlerDelete}>
                        <DeleteIcon sx={styles.icon} />
                    </IconButton>
                }
                sx={styles.inputContainer}
            >
                <IconButton onClick={handlerCheck}>
                    <CheckIcon sx={styles.icon} />
                </IconButton>
                <ListItemText primary={todoText} sx={styles.inputText} />
            </ListItem>
        </Box>
    );
};

export default Todo;
