import React from "react";

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

    return (
        <div className="todo-container">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todoText}
            </li>
            <button onClick={handlerCheck}>
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handlerDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
