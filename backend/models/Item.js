const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
