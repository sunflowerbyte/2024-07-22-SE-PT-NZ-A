const Inventory = require('../models/Inventory');

// Get all inventory items
const getAllInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    console.log("Fetched items:", items); // Log the fetched data
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory', error: error.message });
  }
};

// Add a new inventory item
const addInventoryItem = async (req, res) => {
  const { consumableId, quantity, status } = req.body;

  console.log("Request Body:", req.body);

  try {
    const item = new Inventory({ consumableId, quantity, status: status ||"Urgent" });
    await item.save();
    res.status(201).json({ message: 'Inventory item added successfully!', item });
  } catch (error) {
    console.error("Error adding inventory item:",error);
    res.status(500).json({ message: 'Error adding inventory item', error: error.message });
  }

  if (!consumableId || !quantity || !status) {
    return res.status(400).json({ message: "All fields are required." });
  }
  
};

module.exports = { getAllInventory, addInventoryItem };
