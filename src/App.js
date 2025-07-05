import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const priorityValue = (priority) => {
    const map = { High: 1, Medium: 2, Low: 3 };
    return map[priority];
  };

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };
    setTasks(prev => [...prev, newTask].sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority)));
  };

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
    .filter(task => {
      const matchPriority = priorityFilter === "All" || task.priority === priorityFilter;
      const matchStatus =
        statusFilter === "All" ||
        (statusFilter === "Completed" && task.completed) ||
        (statusFilter === "Incomplete" && !task.completed);
      return matchPriority && matchStatus;
    })
    .sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority));

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Advanced Task Manager</h1>
      <TaskForm addTask={addTask} />
      <Filter
        setPriorityFilter={setPriorityFilter}
        setStatusFilter={setStatusFilter}
      />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
// This code is the main application component for an advanced task manager.