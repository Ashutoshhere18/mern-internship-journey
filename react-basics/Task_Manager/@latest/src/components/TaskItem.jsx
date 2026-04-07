import React from 'react'

export default function TaskItem({task,deleteTask,toggleTask}) {
  return (
    <tr >
      <th scope="row"></th>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.completed ? 'Done' : 'Pending'}</td>
      <td><button onClick={()=>deleteTask(task.id)} className='btn btn-danger'>Delete</button></td>
      <td><button className='btn btn-warning' onClick={()=>toggleTask(task.id)}>Toggle</button></td>
    </tr>
  )
}
