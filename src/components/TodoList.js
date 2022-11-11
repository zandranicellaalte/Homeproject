import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <p>TODO List</p>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todoText={todo.text}
                            todos={todos}
                            todo={todo}
                            setTodos={setTodos}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
