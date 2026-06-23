import taskModel from "../models/taskModel.js"

// get tasks
const getTasks = async(req, res) => {
    try {
        const tasks = await taskModel.find({})
        res.status(200).json({success: true, message: "tasks fetched from db", tasks})
    } catch(error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }
}

const addTask = async(req, res) => {
    try {
        const {title, status} = req.body
        if (!title || status === undefined) {
            res.status(500).json({success:false, message:'Mising Credentials'})
        }
        const newTask = new taskModel({title,status})
        await newTask.save()
        res.status(200).json({success:true, message:'task saved', newTask})
    } catch(error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

const statusChange = async (req, res) => {
    try {
        const {id, status} = req.body
        await taskModel.findByIdAndUpdate(id, {status: status})
        res.status(200).json({success:true, message:'status updated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

const editTask = async (req, res) => {
    try {
        const {editingTaskId, title, status}= req.body
        await taskModel.findByIdAndUpdate(editingTaskId, {title: title, status: status})
        res.status(200).json({success: true, message: 'edit successfull'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.body
        await taskModel.findByIdAndDelete(id)
        res.status(200).json({success: true, message: 'task deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false , message: error.message})
    }
}

export {getTasks, addTask, statusChange, editTask, deleteTask}