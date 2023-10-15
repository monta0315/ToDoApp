import { useState } from "react";
import { ToDo } from "Types";

export const useTask = () => {
  const [tasks, setTasks] = useState<Array<ToDo>>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const addTask = (title: String) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: Number, title: String) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id: Number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id: Number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleCompleted,
    getRemainingTasks,
    clearTasks,
    toggleTheme,
    darkTheme,
  };
};
