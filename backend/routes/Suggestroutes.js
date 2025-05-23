const express = require('express');
const router = express.Router();
const {
  generateSuggestion,
  getSuggestion
} = require('../controllers/Suggestcontroller');

router.post('/generate', generateSuggestion);
router.get('/:leadId', getSuggestion);

module.exports = router;
