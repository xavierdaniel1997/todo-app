import { useEffect, useState } from "react";
import "./Header.css";
import { FiPlusCircle } from "react-icons/fi";

const Header = ({addTask}) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmitTask = (event) => {
    event.preventDefault();
    addTask(todoTitle)
    setTodoTitle("")
  }
  const handleInputChange = (event) => {
    setTodoTitle(event.target.value)
  }
  return (
    <div className="header-container">
        <h1 className="heading-title">TODO</h1>
        <form className="todoInput-container" onSubmit={handleSubmitTask}>
            <input className="taskInput" type="text" placeholder='Add new tasks to do !' value={todoTitle} onChange={handleInputChange}/>
            <button className="create-btn">Create <FiPlusCircle /></button>
        </form>
    </div>
  )
}

export default Header