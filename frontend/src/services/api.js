const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

export const getPopularMovies = async () => {
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`);
    const data = await response.json();

    return data.results;
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`);
    const data = await response.json();

    return data;
};

export const getMovieTrailer = async (id) => {
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`);
    const data = await response.json();

    return data;
};

export const getMovieRating = async (imdbId) => {
  
    
    const response = await fetch(`${OMDB_BASE_URL}?i=${imdbId}&apikey=${OMDB_API_KEY}`);
    const data = await response.json();

    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`);
  
    const data = await response.json();

    return data.results;
};