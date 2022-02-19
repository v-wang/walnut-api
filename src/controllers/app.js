const express = require('express');
const router = express.Router();
const MedicalCode = require('../models/MedicalCode');

// index
router.get('/', (req, res) => {
  MedicalCode.find({}).then((codes) => {
    res.json(codes);
  });
});

module.exports = router;
