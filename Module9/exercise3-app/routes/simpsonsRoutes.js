const express = require("express");
const {
  getCharacters,
  getCharacterById,
  updateCharacter,
} = require("../controllers/simpsonsController");

const router = express.Router();

// Route for getting all characters with optional query filtering
router.get("/", getCharacters);

// Route for getting a character by ID
router.get("/:id", getCharacterById);

// Route for updating a character by ID
router.put("/:id", updateCharacter);

module.exports = router;
