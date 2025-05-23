const Lead = require('../models/Lead');

exports.getLeads = async (req, res) => {
  const { name, tag, status, company } = req.query;
  const query = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (tag) query.tags = tag;
  if (status) query.status = status;
  if (company) query.company = { $regex: company, $options: 'i' };

  const leads = await Lead.find(query).sort({ createdAt: -1 });
  res.json(leads);
};

exports.createLead = async (req, res) => {
  const newLead = new Lead(req.body);
  await newLead.save();
  res.status(201).json(newLead);
};

exports.updateLead = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
};

exports.deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: 'Lead deleted' });
};
