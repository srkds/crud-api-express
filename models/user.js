const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
