const AISuggestion = require('../models/AiSuggestion');
const Lead = require('../models/Lead');

// Mocked AI logic
function mockAISuggestion(lead) {
  const actions = [
    'Send a follow-up email',
    'Engage on LinkedIn',
    'Wait 2 days and message again',
    'Schedule a call',
    'Mark as high priority'
  ];
  return actions[Math.floor(Math.random() * actions.length)];
}

exports.generateSuggestion = async (req, res) => {
  const lead = await Lead.findById(req.body.leadId);
  const suggestionText = mockAISuggestion(lead);

  const suggestion = new AISuggestion({
    lead: lead._id,
    suggestion: suggestionText
  });

  await suggestion.save();
  res.status(201).json(suggestion);
};

exports.getSuggestion = async (req, res) => {
  const suggestions = await AISuggestion.find({ lead: req.params.leadId }).sort({ generatedAt: -1 });
  res.json(suggestions);
};
