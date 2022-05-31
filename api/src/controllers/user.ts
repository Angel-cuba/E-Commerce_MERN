import { Request, Response, NextFunction } from 'express'
import User, { IUser } from '../models/User'
import userService from '../services/user'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import keys from '../config/keys'

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, lastname, picture, email, role } = req.body

  const user = new User({
    name,
    lastname,
    picture,
    email,
    role,
  })
  try {
    await userService.createUser(user)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).send(err)
  }
}
export const getAnUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const user = await userService.getUserById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).send(err)
  }
}
export const updateAnUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const user = await userService.updateAnUser(id, req.body)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).send(err)
  }
}

export const deletingUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const user = await userService.deleteAnUser(id)
    res.status(200).json({ message: `User ${user?.name} deleted` })
  } catch (err) {
    res.status(404).send(err)
  }
}


export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('req.user', req.user)
  const message = 'Login'
  res.json({ message })
}
