import React from 'react'

const Task = ({params, onStatusChange, onEdit, onDelete}) => {

  return (
    <div className='flex justify-between items-center text-lg w-1/2 m-auto mt-2'>
      <div className='flex justify-center items-center gap-6'>
        <p className='w-76 border-2 border-gray-400 rounded-lg px-2 py-1'>{params.title}</p>
        <input type="checkbox" checked={params.status} onChange={()=>onStatusChange(params._id, !params.status)} name="status" id="status" className='scale-200' />
        </div>
        <div className='flex justify-center items-center gap-6'>
        <p  onClick={() => onEdit(params)} className='text-blue-600 cursor-pointer hover:text-blue-400'>Edit</p>
        <p onClick={() => onDelete(params._id)} className='text-red-600 cursor-pointer hover:text-red-400'>Delete</p>
        </div>
    </div>
  )
}

export default Task