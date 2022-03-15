import User from '../models/User.js';
import errorHandlerMiddleware from '../middleware/error-handler.js';

const register = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({ status: 'success', user });
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
