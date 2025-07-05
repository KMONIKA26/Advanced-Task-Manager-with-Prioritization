import React from 'react';

const Filter = ({ setPriorityFilter, setStatusFilter }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        Filter by Priority:
        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>

      <label style={{ marginLeft: 20 }}>
        Filter by Status:
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
// This component provides filters for tasks based on priority and status.