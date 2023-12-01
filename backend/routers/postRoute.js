// external import
import express from 'express';

// internal import
import { getPosts, getSinglePost, deleteSinglePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', getPosts);
router.get('/post/:id', getSinglePost);
router.delete('/post/:id', deleteSinglePost);

export default router;