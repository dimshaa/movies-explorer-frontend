import { MAIN_API_URL, MOVIES_API_URL } from './constants';

const headers = {
  'Content-Type': 'application/json',
};

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
};

export function register({ email, name, password }) {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      name,
      password
    }),
  })
  .then(res => checkResponse(res));
};

export function login({ email, password }) {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify({
      email,
      password
    }),
  })
  .then(res => checkResponse(res));
};

export function getUserInfo() {
  return fetch(`${MAIN_API_URL}/users/me`, {
    headers,
    credentials: 'include',
  })
  .then(res => checkResponse(res));
};

export function updateUserInfo({ name, email }) {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers,
    credentials: 'include',
    body: JSON.stringify({
      email,
      name,
    }),
  })
  .then(res => checkResponse(res));
};

export function getSavedMovies() {
  return fetch(`${MAIN_API_URL}/movies`, {
    headers,
    credentials: 'include',
  })
  .then(res => checkResponse(res));
};

export function addMovie(movie) {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director ,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_API_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  })
  .then(res => checkResponse(res));
};

export function deleteMovie(movieId) {
  return fetch(`${MAIN_API_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  })
  .then(res => checkResponse(res));
};
