const mongoose = require("mongoose");
const { User } = require("./user");

const instrumentSchema = new mongoose.Schema({
  unit: {
    type: String,
  },
  description: {
    type: String,
  },
  // ipAddress: {
  //   type: String,
  // },
  // gateway: {
  //   type: String,
  // },
  status: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

const Instrument = mongoose.model("instrument", instrumentSchema);

module.exports = { Instrument };
