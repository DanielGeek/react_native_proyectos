import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '542ee019146e3fc679a21ea24cd2791b',
    language: 'en-US',
  },
});

export default movieDB;

