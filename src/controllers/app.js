const express = require('express');
const router = express.Router();
const MedicalCode = require('../models/MedicalCode');

// index
router.get('/', (req, res) => {
  MedicalCode.find({}).then((codes) => {
    res.json(codes);
  });
});

// show
router.get('/:code', (req, res) => {
  MedicalCode.findOne({ code: req.params.code }).then((code) => {
    res.json(code);
  });
});

module.exports = router;
