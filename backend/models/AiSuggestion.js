const mongoose = require('mongoose');

const AISuggestionSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  suggestion: { type: String },
  generatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AISuggestion', AISuggestionSchema);
