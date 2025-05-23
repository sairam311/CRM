const express = require('express');
const router = express.Router();
const {
  getConversations,
  createConversation,
  deleteConversation
} = require('../controllers/Convocontroller');

router.get('/:leadId', getConversations);
router.post('/', createConversation);
router.delete('/:id', deleteConversation);

module.exports = router;
