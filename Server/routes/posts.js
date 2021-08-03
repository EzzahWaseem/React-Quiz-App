import express from 'express'
import {getList,createList,updateList,deleteList} from '../controllers/posts.js'
import {createUser} from '../controllers/user.js'

const router = express.Router()

router.get('/', getList);
router.post('/', createList);
// router.get('/:id', getPost);
router.patch('/:id', updateList);
router.delete('/:id', deleteList);

export default router