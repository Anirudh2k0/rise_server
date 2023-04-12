const mongoose = require('mongoose');
const { User } = require('./user');

const projectSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  imagesScanned: {
    type: Number,
  },
  imagesAnalysed: {
    type: Number,
  },
  instruments: {
    type: Number,
  },
  storageUnits: {
    type: Number,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

const Project = mongoose.model('project', projectSchema);

module.exports = { Project };
