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

router.get('/all', verifyAuth, allProducts)
router.get('/search', getProductsBySearch)
router.post('/create', createProduct)
/**Id is required */
router.get('/:id', getProduct)
router.put('/:id/edit', updateProduct)
router.delete('/:id/delete', deleteProduct)

export default router
