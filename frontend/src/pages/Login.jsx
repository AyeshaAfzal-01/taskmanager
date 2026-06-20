import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
   <div className='h-96 w-96 border border-gray-100 bg-blue-50 rounded-2xl shadow-2xl flex flex-col gap-2 justify-center  items-center'>
    <p className='font-bold mb-4 text-3xl'>Login</p>
    <input type="text"  placeholder='Email' className='border border-gray-400 rounded-lg w-3/4 px-2 py-1'  required/>
    <input type="password"  placeholder='Password' className='border border-gray-400 rounded-lg w-3/4 px-2 py-1'  required/>
    <p className='text-blue-600 text-sm'>Forgot Password?</p>
    <Link to={'/'} className='w-24'>
    <button className='bg-blue-600 text-white hover:bg-blue-500 px-2 py-1 rounded-2xl w-full'>Login</button>
    </Link>
    <div>
        <span>Don't have an account?</span>
        <span className='text-blue-600'>signUp</span>
    </div>
    
   </div>
   </div>
  )
}

export default Login