import { MAIN_API_URL } from './constants';

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
    body: JSON.stringify(movie),
  })
  .then(res => checkResponse(res));
};

export function deleteMovie(movie) {
  return fetch(`${MAIN_API_URL}/movies/${movie}`, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  })
  .then(res => checkResponse(res));
};
