import express from 'express'
import { addTask, getTasks, statusChange } from '../controllers/taskController.js'

const router = express.Router()

router.get('/get', getTasks)
router.post('/add', addTask)
router.post('/updateStatus', statusChange)

export default router