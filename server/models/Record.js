const mongoose = require("mongoose")
const { Schema } = mongoose

const Record = new Schema({
  email: String,
  password: String
})

module.exports = mongoose.model("Record", Record)
