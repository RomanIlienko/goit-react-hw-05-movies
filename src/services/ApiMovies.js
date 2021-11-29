const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "a9b54992442ac9e13eb3826e2749c070";

async function apiMoviesWidthError(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}
export function fetchTrendingMovies() {
  return apiMoviesWidthError(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchSearchMovies(searchQuery) {
  return apiMoviesWidthError(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchOneMovie(movieId) {
  return apiMoviesWidthError(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}
export function fetchCredits(movieId) {
  return apiMoviesWidthError(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchReviews(movieId) {
  return apiMoviesWidthError(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
}
