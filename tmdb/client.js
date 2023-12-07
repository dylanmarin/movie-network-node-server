import axios from "axios";
export const TMDB_API = "https://api.themoviedb.org/3"
export const TMDB_API_KEY = process.env.TMDB_API_KEY;
export const TMBD_API_AUTH_SUFFIX = `api_key=${TMDB_API_KEY}`;

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(
        `${TMDB_API}/movie/${movieId}?${TMBD_API_AUTH_SUFFIX}`
    );

    return response.data;
}

export const getMovieCredits = async (movieId) => {
    const response = await axios.get(
        `${TMDB_API}/movie/${movieId}/credits?${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data;
}

export const getMovieRecommendations = async (movieId) => {
    const response = await axios.get(
        `${TMDB_API}/movie/${movieId}/recommendations?${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data.results;
}

export const getPopularMovies = async (timeRange) => {
    const response = await axios.get(
        `${TMDB_API}/trending/movie/${timeRange}?${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data.results;
}

export const getMoviesSearchResults = async (searchString) => {
    const response = await axios.get(
        `${TMDB_API}/search/movie?query=${searchString.replace(" ", "%20")}&include_adult=false&language=en-US&page=1&${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data.results;
}


export const getProductionCompanyDetails = async(companyId) => {
    const response = await axios.get(
        `${TMDB_API}/company/${companyId}?${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data;
}

export const getMoviesByProductionCompany = async(companyId) => {
    const response = await axios.get(
        `${TMDB_API}/discover/movie?include_adult=false&sort_by=popularity.desc&with_companies=${companyId}&${TMBD_API_AUTH_SUFFIX}`
    );
    return response.data.results;
}
