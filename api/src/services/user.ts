import User, { IUser } from '../models/User'

const createUser = async (user: IUser): Promise<IUser> => {
  return user.save()
}

const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id)
}

const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email })
}

const updateAnUser = async (id: string, user: IUser): Promise<IUser | null> => {
  return User.findByIdAndUpdate(id, user)
}

const deleteAnUser = async (id: string): Promise<IUser | null> => {
  return User.findByIdAndDelete(id)
}

const getAllUsers = async (): Promise<IUser[]> => {
  return User.find({ role: 'USER' })
}

export default {
  createUser,
  getUserById,
  getUserByEmail,
  updateAnUser,
  deleteAnUser,
  getAllUsers,
}
