import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between my-2 mx-8 font-semibold text-blue-700'>
        <div className='text-2xl cursor-pointer'>
            <span>Task</span>
            <span className='text-red-500 italic font-bold'>flow</span>
        </div>
        <Link to='/login'>
        <button className='bg-blue-600 text-white rounded-2xl px-3 py-1 text-center cursor-pointer hover:bg-blue-400'>Login</button>
       </Link>
        </div>
        <hr className='text-gray-300'/>
    </nav>
  )
}

export default Navbar