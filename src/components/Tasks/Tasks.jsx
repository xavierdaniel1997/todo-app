import TodoList from "../TodoList/TodoList";
import "./Tasks.css";

const Tasks = ({tasks, deleteTask, toggleStatus, editTask}) => {
  const completedTask = tasks.filter((task) => task.isCompleted).length
  return (
    <div className="tasks-container">
      <div className="todo-heading-status">
        <div className="todo-count">
          <p>Create Tasks</p>
          <span className="task-status">{tasks.length}</span>
        </div>
        <div className="todo-to-complete">
          <p>Completed Tasks</p>
          <span className="task-status">{completedTask} of {tasks.length}</span>
        </div>
      </div>
      <div className="todo-listes">
        {tasks.map((task) => (
          <TodoList task={task} deleteTask={deleteTask} toggleStatus={toggleStatus} editTask={editTask}/>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
