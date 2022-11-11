import React from "react";

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

    return (
        <div>
            <input value={inputValue} type="text" onChange={todoHandler} />
            <button type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div>
                <select>
                    <option value="all">Alla</option>
                    <option value="klar">Avklarade</option>
                    <option value="ejklar">Behöver göras!</option>
                </select>
            </div>
        </div>
    );
};

export default TodoForm;
