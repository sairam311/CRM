const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  type: {
    type: String,
    enum: ['Email', 'Call', 'LinkedIn', 'Other'],
    required: true
  },
  content: { type: String },
  date: { type: Date, default: Date.now },
  followUpReminder: { type: Date }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
