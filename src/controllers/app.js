const express = require('express');
const router = express.Router();
const MedicalCode = require('../models/MedicalCode');

// index - show all medical codes
router.get('/show', (req, res) => {
  MedicalCode.find({}).then((codes) => {
    res.json(codes);
  });
});

// create - new medical code
router.get('/new', (req, res) => {
  res.render('new');
});

// show - specific medical code
router.get('/:code', (req, res) => {
  MedicalCode.findOne({ code: req.params.code }).then((code) => {
    res.json(code);
  });
});

module.exports = router;
