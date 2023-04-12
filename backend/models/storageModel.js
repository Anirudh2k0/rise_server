const mongoose = require('mongoose');
const { User } = require('./user');

const storageSchema = new mongoose.Schema({
  unitId: {
    type: String,
  },
  name: {
    type: String,
  },
  capacity: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

const Storage = mongoose.model('storage', storageSchema);

module.exports = { Storage };
