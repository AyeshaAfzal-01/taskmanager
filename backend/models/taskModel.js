import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: Boolean, required: true},
})

const taskModel = mongoose.models.tasks || mongoose.model("tasks", taskSchema)
export default taskModel