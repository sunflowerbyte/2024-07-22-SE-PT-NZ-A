const express = require('express');
const Maintenance = require('../models/Maintenance');
const router = express.Router();

// Get All Maintenance Requests
router.get('/', async (req, res) => {
  try {
    const maintenanceRequests = await Maintenance.find();
    res.json(maintenanceRequests);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add New Maintenance Request
router.post('/', async (req, res) => {
  const { equipmentName, issue } = req.body;
  try {
    const newRequest = new Maintenance({ equipmentName, issue });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
