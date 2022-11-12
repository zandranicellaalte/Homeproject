import React from "react";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TodoForm = ({ todos, setTodos, setInputValue, inputValue }) => {
    const todoHandler = (e) => {
        setInputValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputValue, completed: false, id: Math.random() * 1000 },
        ]);
        setInputValue("");
    };

    const styles = {
        input: {
            border: "1px solid var(--main-bg-secondary-color)",
            borderRadius: "5px",
        },
    };

    return (
        <Box className="container">
            <TextField
                value={inputValue}
                onChange={todoHandler}
                id="outlined-basic"
                label="What do you need to do?"
                variant="outlined"
                sx={styles.input}
                InputLabelProps={{
                    style: { color: "white" },
                }}
                InputProps={{
                    style: {
                        color: "white",
                        width: "400px",
                    },
                }}
            />
            <Button
                type="submit"
                onClick={submitHandler}
                variant="contained"
                sx={{ width: "5px", height: "58px", marginLeft: "5px" }}
            >
                <AddIcon />
            </Button>
        </Box>
    );
};

export default TodoForm;
