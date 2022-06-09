import { Router } from 'express'
import { allUsersFromDatabase } from '../controllers/admin'
import { isAdmin } from '../middlewares/authAdmin'
const router = Router()

router.get('/allusers', isAdmin, allUsersFromDatabase)

export default router
