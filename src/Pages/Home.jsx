import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import NewHeading from "../components/NewHeading";
export const Home = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (taskTitle) => {
    const randomId = Math.floor(Math.random() * 1000000);
    const newTask = {id: randomId, title: taskTitle, isCompleted : false};
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }  

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem('tasks'));
    if(saveTasks){
      setTasks(saveTasks)
    }
  }, [])

  const toggleCompletStatus = (taskId) => {
    const newTask = tasks.map((task) => {
      if(task.id===taskId){
        return{
          ...task, isCompleted: !task.isCompleted
          // isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTask)
    localStorage.setItem("tasks", JSON.stringify(newTask))
  }

  const editTask = (taskId, newTitle) => {
    const updateTask = tasks.map((task) => (
      task.id===taskId ? {...task, title: newTitle} : task
    ))
    setTasks(updateTask)
    localStorage.setItem("tasks", JSON.stringify(updateTask))
  }
  const deleteTask = (taskId) => {
    const deleteOne = tasks.filter((task) => (
      task.id!==taskId
    ))
    // setTasks(tasks.filter((task) => (
    //   task.id!==taskId
    // )))
    localStorage.setItem("tasks", JSON.stringify(deleteOne))
    setTasks(deleteOne)
  }

  
  return (
    <div>
      <Header addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleStatus={toggleCompletStatus} editTask={editTask}/>
    </div>
  );
};
