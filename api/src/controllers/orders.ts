import { Request, Response, NextFunction } from 'express'
import Order from '../models/Order'

export const userBuyProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = new Order({
      products: req.body.products,
      user: req.body.user,
    })
    order.save()
    res.json(order)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getUserHistoryOfProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find().populate('products').populate('user')
    console.log('orders', orders)
    res.json(orders)
  } catch (error) {
    res.status(400).send(error)
  }
}
