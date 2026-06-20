import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Task from '../components/Task'
import { useState } from 'react'

const Home = () => {
  const [tasks, setTasks] = useState([])
const [showTask, setShowTask] = useState(false)

const addTaskToDB = async (e) => {
  e.preventDefault()
  const title = e.target.title.value 
  const status = e.target.status.checked
  console.log('env:', import.meta.env.VITE_BACKEND_URL)
  try {
    const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/add', {title,status})
    if(response.data.success) {
      console.log(response)
    }
  } catch(error) {
    console.log(error)
  }
}

const fetchTaskFromDB = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/get')
    if (response.data.success) {
      setTasks(response.data.tasks)
    }
  } catch (error) {
    console.log(error)
  }
}

const handleShowTask = () => {
  if (!showTask) {
    fetchTaskFromDB()
  }
  setShowTask(!showTask)
}
  return (
    <>
        <Navbar/>
    <form onSubmit={(e)=>{addTaskToDB(e)}} className='flex flex-col   gap-8 m-6 pt-12 justify-center items-center'>
      <div className='flex justify-center items-center gap-6 w-full'>
      <input type="text" name='title' placeholder='Task title' className='border-2 border-gray-400 rounded-lg w-1/2 px-2 py-1 text-2xl font-semibold' required />
      <input type="checkbox" name="status" id="status" className='scale-200'/>
      </div>
        <button type="submit" className='bg-blue-600 px-2 py-2 text-2xl hover:bg-blue-400 text-white font-semibold rounded-lg w-40'>Add Task</button>
    </form>

    <p onClick={handleShowTask} className='text-red-600 font-semibold text-center hover:text-red-400 cursor-pointer'>
      {showTask ? 'Hide Tasks' : 'Show all Tasks'}
    </p>
    {
      showTask && tasks.map((t) => (
        <Task key={t._id} params={t}/>
      ))
    }
   
    </>
  )
}

export default Home