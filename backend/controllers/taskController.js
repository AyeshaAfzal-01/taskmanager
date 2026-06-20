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
        res.status(200).json({success:true, message:'task saved'})
    } catch(error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

export {getTasks, addTask}