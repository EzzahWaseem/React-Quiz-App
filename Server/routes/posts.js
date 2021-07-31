import express from 'express'
import {getPostReq,createPost} from '../controllers/posts.js'
const router = express.Router()

router.get('/',getPostReq);
router.get('/',createPost);

export default router