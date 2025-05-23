const Conversation = require('../models/Conversation');

exports.getConversations = async (req, res) => {
  const conversations = await Conversation.find({ lead: req.params.leadId }).sort({ date: -1 });
  res.json(conversations);
};

exports.createConversation = async (req, res) => {
  const conversation = new Conversation(req.body);
  await conversation.save();
  res.status(201).json(conversation);
};

exports.deleteConversation = async (req, res) => {
  await Conversation.findByIdAndDelete(req.params.id);
  res.json({ message: 'Conversation deleted' });
};
