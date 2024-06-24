import "./TodoList.css";
import {MdOutlineModeEdit} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";
import {IoIosCheckmarkCircle} from "react-icons/io";
import {useState} from "react";

const TodoList = ({task, deleteTask, toggleStatus, editTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const editTodo = () => {
    setIsEditing(true);
    setEditedTitle(task.title);
  };
  const saveEditing = () => {
    setIsEditing(false);
    editTask(task.id, editedTitle);
  };

  return (
    <div className="todolist-container">
      <button className="toggle-btn" onClick={() => toggleStatus(task.id)}>
        {task.isCompleted ? (
          <IoIosCheckmarkCircle size={26} />
        ) : (
          <div className="clickBtn" />
        )}
      </button>
      <div className="todo-data">
        {isEditing ? (
          <input
          className="edit-todo"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={saveEditing}
            autoFocus
          />
        ) : (
          <p className={`${task.isCompleted ? "todo-list-item" : " "}`}>
            {task?.title}
          </p>
        )}
        {/* <p className={`${task.isCompleted? "todo-list-item" : " "}`}>{task?.title}</p> */}
      </div>
      <div className="modify-btn-container">
        <span className="mod-btn-1">
          <MdOutlineModeEdit onClick={editTodo} />
        </span>
        <span className="mod-btn-2" onClick={() => deleteTask(task.id)}>
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default TodoList;
