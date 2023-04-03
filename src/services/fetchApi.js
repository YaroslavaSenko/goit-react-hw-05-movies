import axios from 'axios';

const APY_KEY = '7ac9391c36294b15d48007ced829db82';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get('/trending/all/day', { params });
  const data = response.data;

  return data;
}

export async function fetchMovieById(movieId) {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}`, { params });
  const data = response.data;

  return data;
}

export async function fetchMovieByName(movieName) {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
    query: movieName,
  };

  const response = await axios.get(`/search/movie`, { params });
  const data = response.data;

  return data;
}

export async function fetchCast(movieId) {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}/credits`, { params });
  const data = response.data;

  return data;
}

export async function fetchReviews(movieId) {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}/reviews`, { params });
  const data = response.data;

  return data;
}