import React from 'react'
import TaskItem from './TaskItem'


export default function TaskList({tasks,deleteTask,toggleTask}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Delete</th>
          <th scope="col">Toggle</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
        ))}
      </tbody>
    </table>
  )
}
