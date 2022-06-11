import { Router } from 'express'
import {
  userBuyProducts,
  getUserHistoryOfProducts,
} from '../controllers/orders'
import verifyAuth from '../middlewares/authorization'
const router = Router()

//Posting sales
router.post('/', userBuyProducts)

//History method
router.get('/', getUserHistoryOfProducts)

export default router
