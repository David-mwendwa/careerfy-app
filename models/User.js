import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Please provide a name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Pleae provide a valid email',
    ],
    required: ['true', 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: ['true', 'Please provide a password'],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    required: ['true', 'Please provide a location'],
    maxlength: 20,
    default: 'my city',
  },
});

export default mongoose.model('User', UserSchema);
