import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function TodoApp() {
  const [todos, setTodos] = useState(['abc', 'xyz']); 
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setInputError(false); 
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setInputError(false); 
    } else {
      setInputError(true); 
    }
  };

  const handleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✓ ${updatedTodos[index]}`; // Marking completed todo
    setTodos(updatedTodos);
  };

  return (
    <div className="container"> {/* Added container class */}
      <div className="app"><h1>Todo App</h1></div>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item"> {/* Added todo-item class */}
          <input type="checkbox" />
          <span>{todo}</span>
          <button className="complete-button" onClick={() => handleTodoCompletion(index)}>complete</button> 
        </div>
      ))}
      <div className="heading"><h4>TOdo</h4></div>
      <div className="yourtodo">
        <input
          type="text"
          className={inputError ? 'todo-input error' : 'todo-input'}
          placeholder="Your Todo.."
          value={inputValue}
          onChange={handleInputChange}
        />
        </div>
        <button className="todo-button" onClick={handleAddTodo}>Submit</button> 
      
    </div>
  );
}

export default TodoApp;
