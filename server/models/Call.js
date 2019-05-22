const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CallSchema = new Schema({
  callerId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  startedAt: {
    type: Date,
    default: Date.now
  },
  endedAt: {
    type: Date
  }
})

const Call = mongoose.model('Call', CallSchema)

module.exports = Call
