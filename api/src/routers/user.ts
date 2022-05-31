import { Router } from 'express'
import passport from 'passport'
import {
  signUp,
  deletingUser,
  getAnUser,
  updateAnUser,
  login,
} from '../controllers/user'
const router = Router()

router.post('/signup', signUp)
router.get('/:id', getAnUser)
router.put('/:id', updateAnUser)
router.delete('/:id', deletingUser)

//Login user
router.post('/signin-google', passport.authenticate('google-id-token', {session: false}) ,login)

export default router
