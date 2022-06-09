import { Router } from 'express'
import verifyAuth from '../middlewares/authorization'
const router = Router()

import {
  allProducts,
  createProduct,
  deleteProduct,
  getProduct,
  getProductsBySearch,
  updateProduct,
} from '../controllers/products'
import { isAdmin } from '../middlewares/authAdmin'

router.get('/all', verifyAuth, allProducts)
router.get('/search', verifyAuth, getProductsBySearch)
router.post('/create', isAdmin, createProduct)
/**Id is required */
router.get('/:id', verifyAuth, getProduct)
router.put('/:id/edit', isAdmin, updateProduct)
router.delete('/:id/delete', isAdmin, deleteProduct)

export default router
