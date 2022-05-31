import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';



export default function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const tokenFromRequest = req.headers.authorization || '';
  if (!tokenFromRequest) return res.status(401).send('Access denied. No token provided.');

  try {
    const token = tokenFromRequest.split(' ')[1];
    const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET  as string);
    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
}