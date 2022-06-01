import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { ForbiddenError } from '../helpers/apiError'
import keys from '../config/keys'

export default function verifyAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers.authorization || ''
  console.log(req.headers)

  try {
    const token = auth.split(' ')[1]
    console.log('token-', token)
    const PRIVATE_KEY = keys.PRIVATE_KEY as string

    //  const verify = jwt.verify(token, PRIVATE_KEY)
    //   console.log('verify', verify);

    next()
  } catch (error) {
    console.log('error: ', error)
  }
}
