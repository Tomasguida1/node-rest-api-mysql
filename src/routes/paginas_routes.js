import {Router} from 'express'
import {getPosts,getPost, uplPosts, updPosts, dltPosts} from '../controllers/posts_controllers.js'

const router = Router()
router.get('/posts',  getPosts)

router.get('/posts/:idposts', getPost)

router.post('/posts',uplPosts)

router.patch('/posts/:idposts',updPosts) 

router.delete('/posts/:idposts', dltPosts)

export default router