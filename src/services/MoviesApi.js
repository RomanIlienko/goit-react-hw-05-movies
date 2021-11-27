const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'a9b54992442ac9e13eb3826e2749c070'

async function apiMoviesWidthError( url = '', config = {}) {
    const response = await fetch(url, config)
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'))
        
}

export function FetchTrends() {
    return apiMoviesWidthError(
        `${BASE_URL}trending/all/day?api_key=${API_KEY}`)
}

export function FetchOnSearchQuery(searchQuery) {
    return apiMoviesWidthError(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
}

export function GetMovieDetails(movieId) {
    return apiMoviesWidthError(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
}

export function GetMovieCredits(movieId) {
    return apiMoviesWidthError(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
}

export function GetMovieReviews(movieId) {
    return apiMoviesWidthError(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
}