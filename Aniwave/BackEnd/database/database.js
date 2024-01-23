const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/animeDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

const animeSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  episodes: { type: Number, default: 0 },
  releaseYear: { type: Number },
  description: { type: String },
  imageUrl: { type: String },
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = {
  async createAnime(animeData) {
    try {
      const createdAnime = await Anime.create(animeData);
      console.log('Anime inserted:', createdAnime);
      return createdAnime;
    } catch (err) {
      console.error('Error creating anime:', err);
      throw err;
    }
  },

  async getAnimeByName(animeName) {
    try {
      const anime = await Anime.findOne({ title: animeName });
      return anime;
    } catch (err) {
      console.error('Error getting anime by name:', err);
      throw err;
    }
  },

  async getAllAnime() {
    try {
      const allAnime = await Anime.find();
      return allAnime;
    } catch (err) {
      console.error('Error getting all anime:', err);
      throw err;
    }
  },

  async updateAnimeByName(animeName, updatedAnimeData) {
    try {
      const updatedAnime = await Anime.findOneAndUpdate({ title: animeName }, updatedAnimeData, { new: true });
      console.log('Anime updated:', updatedAnime);
      return updatedAnime;
    } catch (err) {
      console.error('Error updating anime:', err);
      throw err;
    }
  },

  async deleteAnimeByName(animeName) {
    try {
      const result = await Anime.findOneAndDelete({ title: animeName });
      console.log('Anime deleted:', result !== null);
      return result !== null;
    } catch (err) {
      console.error('Error deleting anime:', err);
      throw err;
    }
  },
};
