import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderByID,
  getMyOrders,
} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderByID)

export default router
