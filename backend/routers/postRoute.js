// external import
import express from 'express';

// internal import
import { getPosts, getSinglePost, deleteSinglePost, uploadPost, updatePost } from '../controllers/postController.js';
import { singleFileUploader } from '../middlewares/imgUploader.js';
import { checkLogin } from '../middlewares/checkLogin.js';

const router = express.Router();

router.get('/posts', getPosts);
router.get('/post/:id', getSinglePost);
router.post('/post', checkLogin, singleFileUploader, uploadPost);
router.put('/post/:id', checkLogin, singleFileUploader, updatePost);
router.delete('/post/:id', checkLogin, deleteSinglePost);

export default router;