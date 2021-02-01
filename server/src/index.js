import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from '../routes/posts.js'

const app = express()
const CONNECTION_STRING =
    'mongodb+srv://scrapbookadmin:scrapbookadmin@cluster0.1fxcb.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/posts', postRoutes)

mongoose
    .connect(CONNECTION_STRING, {
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
