import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import dotenv from 'dotenv'
import router from './routes/taskRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/task', router)
connectDB()
const port = process.env.PORT_NUMBER || 4000

app.get('/', async (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log("Server running on port: ", port)
})