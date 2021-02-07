import express, { Router } from 'express'
import { signin, signup } from '../controllers/users'

const userRoutes = express.Router()

userRoutes.post('/signin', signin)
userRoutes.post('/signup', signup)

export default userRoutes
