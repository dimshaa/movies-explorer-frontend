import { MOVIES_API_URL } from "./constants";

const headers = {
  'Content-Type': 'application/json'
};

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
};

function getMovies() {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
    headers
  })
    .then(res => checkResponse(res));
};

export default getMovies;
