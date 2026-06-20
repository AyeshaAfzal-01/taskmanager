import React from 'react'

const 
p = ({params}) => {
  return (
    <div className='flex gap-6 text-2xl justify-center items-center'>
        <p className=''>{params.title}</p>
        <input type="checkbox" checked={params.status} readOnly name="status" id="status" />
        <p className='text-blue-600 cursor-pointer hover:text-red-400'>Edit</p>
        <p className='text-red-600 cursor-pointer hover:text-red-400'>Delete</p>
    </div>
  )
}

export default 
p