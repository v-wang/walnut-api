const MedicalCode = require('../models/MedicalCode');
const seedData = require('./seed.json');
// seed data sourced from https://www.cms.gov/Medicare/Fraud-and-Abuse/PhysicianSelfReferral
// seed data contains only blood component collection services

MedicalCode.deleteMany({})
  .then(() => MedicalCode.insertMany(seedData))
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
