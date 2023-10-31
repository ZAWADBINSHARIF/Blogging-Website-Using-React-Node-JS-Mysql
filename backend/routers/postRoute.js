// external import
import express from 'express'

// internal import
import { getPosts, getSinglePost } from '../controllers/postController.js'

const router = express.Router()

router.get('/posts', getPosts)
router.get('/post/:id', getSinglePost)

export default router