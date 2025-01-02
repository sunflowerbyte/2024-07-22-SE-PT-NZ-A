const axios = require("axios");

const BASE_URL = "https://api.sampleapis.com/simpsons/characters";

let characterCache = null;
const fetchCharacters = async () => {
  if (!characterCache) {
    const response = await axios.get(BASE_URL);
    characterCache = response.data;
  }
  return characterCache;
};

const getCharacters = async (req, res) => {
  try {
    const { name, job } = req.query; // Query parameters
    const characters = await fetchCharacters();

    let filteredCharacters = characters;

    if (name) {
      filteredCharacters = filteredCharacters.filter((char) =>
        char.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (job) {
      filteredCharacters = filteredCharacters.filter((char) =>
        char.occupation.toLowerCase().includes(job.toLowerCase())
      );
    }

    res.status(200).json(filteredCharacters);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Simpsons API." });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params; // URL parameter
    const characters = await fetchCharacters();

    const character = characters.find((char) => char.id === parseInt(id));

    if (!character) {
      return res.status(404).json({ error: "Character not found." });
    }

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Simpsons API." });
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL params
    const { name, occupation } = req.body; // Data to update

    if (!name && !occupation) {
      return res.status(400).json({ error: "No valid fields to update." });
    }

    const characters = await fetchCharacters();

    const characterIndex = characters.findIndex(
      (char) => char.id === parseInt(id)
    );

    if (characterIndex === -1) {
      return res.status(404).json({ error: "Character not found." });
    }

    if (name) characters[characterIndex].name = name;
    if (occupation) characters[characterIndex].occupation = occupation;

    res.status(200).json({
      message: "Character updated successfully.",
      character: characters[characterIndex],
    });
  } catch (error) {
    res.status(500).json({ error: "Error updating character." });
  }
};

module.exports = { getCharacters, getCharacterById, updateCharacter };
