const express = require('express');
const Inventory = require('../models/Inventory');
const router = express.Router();

// Get All Inventory Items
router.get('/', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.json(inventoryItems);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add New Inventory Item
router.post('/', async (req, res) => {
  const { itemName, quantity, unit } = req.body;
  try {
    const newItem = new Inventory({ itemName, quantity, unit });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
