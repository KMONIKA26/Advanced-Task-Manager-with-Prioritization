import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const priorityStyles = {
    High: { borderLeft: '5px solid red', background: '#fff0f0' },
    Medium: { borderLeft: '5px solid orange', background: '#fffbe6' },
    Low: { borderLeft: '5px solid green', background: '#f0fff0' }
  };

  return (
    <li style={{ ...priorityStyles[task.priority], marginBottom: 10, padding: 10, borderRadius: 4 }}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            marginLeft: 10
          }}
        >
          {task.title} ({task.priority})
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} style={{ marginTop: 5 }}>Delete</button>
    </li>
  );
};

export default TaskItem;
// This component represents a single task item, displaying its title, priority, and allowing users to toggle completion status or delete the task.