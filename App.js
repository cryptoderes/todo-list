import {useState} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {  
  const[todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos,todo]);
  }  

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To-Do List (React)
        </p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
        
      </header>
    </div>
  );
}




export default App;
