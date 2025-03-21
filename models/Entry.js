
const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Entry', EntrySchema);
