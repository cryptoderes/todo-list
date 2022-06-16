import {useState} from "react";

function Todo({ todo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    return (
        <div style = {{display: "flex"}}>
            <input type = "checkbox" onClick={handleCheckboxClick}/>
            <li
                style = {{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </li>
            <button>x</button>
        </div>
    )
}

export default Todo;