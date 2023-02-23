import {Router} from 'express'
import {getPosts,getPost, uplPosts, updPosts, dltPosts} from '../controllers/posts_controllers.js'

const router = Router()
router.get('/posts',  getPosts)

router.get('/posts/:id', getPost)

router.post('/posts',uplPosts)

router.patch('/posts/:id',updPosts) 

router.delete('/posts/:id', dltPosts)

export default router