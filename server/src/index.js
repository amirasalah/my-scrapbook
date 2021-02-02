import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from '../routes/posts.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello!')
})
app.use('/posts', postRoutes)

mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        }),
    )
    .catch(err => console.log(err.message))
mongoose.set('useFindAndModify', false)
