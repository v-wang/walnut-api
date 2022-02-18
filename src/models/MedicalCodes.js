const mongoose = require('../db/connection');

const MedicalCodeSchema = new mongoose.Schema({
  code: String,
  description: String,
});

const MedicalCode = mongoose.model('MedicalCode', MedicalCodeSchema);

module.exports = MedicalCode;
