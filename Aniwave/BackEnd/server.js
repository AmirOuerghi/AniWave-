const express = require('express');
// const bodyParser = require('body-parser');
const animeDB = require('../BackEnd/database/database'); 
const cors = require('cors');

const app = express();
const port = 5000;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
// Create anime
app.post('/anime', async (req, res) => {
  try {
    const createdAnime = await animeDB.createAnime(req.body);
    res.json(createdAnime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get anime by Name
app.get('/anime/:name', async (req, res) => {
  try {
    const animeName = req.params.name;
    const anime = await animeDB.getAnimeByName(animeName);
    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all anime
app.get('/anime', async (req, res) => {
  try {
    const allAnime = await animeDB.getAllAnime();
    res.json(allAnime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update anime by Name
app.put('/anime/:name', async (req, res) => {
  try {
    const animeName = req.params.name;
    const updatedAnime = await animeDB.updateAnimeByName(animeName, req.body);
    if (updatedAnime) {
      res.json(updatedAnime);
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete anime by Name
app.delete('/anime/:name', async (req, res) => {
  try {
    const animeName = req.params.name;
    const isDeleted = await animeDB.deleteAnimeByName(animeName);
    if (isDeleted) {
      res.json({ message: 'Anime deleted successfully' });
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
