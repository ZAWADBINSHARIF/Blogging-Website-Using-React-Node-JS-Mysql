// external import
import express from 'express'

// internal import
import { loginUser, logoutUser, registerUser } from '../controllers/authController.js'

const router = express.Router()

router.post('/registration', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router