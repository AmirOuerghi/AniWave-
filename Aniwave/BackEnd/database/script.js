// const jikanFetcher = require('./JikanFetcher');
// const animeDatabase = require('./database');

// async function fetchAndStoreAnimeData(animeId) {
//   try {
//     const jikanData = await jikanFetcher.fetchAnimeData(animeId);

//     // Transform the data if needed
//     const transformedData = {
//       title: jikanData.title,
//       genre: jikanData.genres.map(genre => genre.name).join(', '),
//       episodes: jikanData.episodes,
//       releaseYear: jikanData.aired ? new Date(jikanData.aired.from).getFullYear() : undefined,
//       description: jikanData.synopsis,
//     };

//     // Store the data in the database
//     const createdAnime = await animeDatabase.createAnime(transformedData);
//     console.log('Stored anime data in the database:', createdAnime);
//   } catch (error) {
//     console.error('Error fetching and storing anime data:', error);
//     throw error;
//   }
// }

// // Replace the hardcoded animeId with the desired anime ID
// const animeId = 1;

// // Call the function to fetch and store anime data
// fetchAndStoreAnimeData(animeId);
