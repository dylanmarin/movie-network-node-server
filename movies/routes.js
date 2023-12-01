import * as client from "../tmdb/client.js";
import * as detailsDao from "./details/dao.js";
import * as creditsDao from "./credits/dao.js";
import * as listResponsesDao from "./listResponses/dao.js";

function MovieRoutes(app) {

    const findMovieById = async (req, res) => {
        const {movieId} = req.params;

        // first check if it is in database
        const dbMovieDetails = await detailsDao.findMovieDetailsById(movieId);

        if (dbMovieDetails) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbMovieDetails.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbMovieDetails.details);
                return;
            }
        }

        // fetch it from tmdb and update the database
        const clientFetchedMovieDetails = await client.getMovieDetails(movieId);

        // if we got a response
        if (clientFetchedMovieDetails) {
            // update the database if it is already in there
            if (dbMovieDetails) {
                await detailsDao.updateMovieDetailsById(movieId, clientFetchedMovieDetails);
            }

            // otherwise, create a new entry
            else {
                await detailsDao.createMovieDetails(movieId, clientFetchedMovieDetails);
            }

            res.send(clientFetchedMovieDetails);
        }


    }

    const findMovieCredits = async (req, res) => {
        const {movieId} = req.params;

        // first check if it is in database
        const dbMovieCredits = await creditsDao.findMovieCreditsById(movieId);

        if (dbMovieCredits) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbMovieCredits.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbMovieCredits.credits);
                return;
            }
        }

        // fetch it from tmdb and update the database
        const clientFetchedMovieCredits = await client.getMovieCredits(movieId);

        // if we got a response
        if (clientFetchedMovieCredits) {
            // update the database if it is already in there
            if (dbMovieCredits) {
                await creditsDao.updateMovieCreditsById(movieId, clientFetchedMovieCredits);
            }

            // otherwise, create a new entry
            else {
                await creditsDao.createMovieCredits(clientFetchedMovieCredits);
            }

            res.send(clientFetchedMovieCredits);
        }


    }

    const findMovieRecommendations = async (req, res) => {
        const {movieId} = req.params;

        // first check if it is in database
        const dbMovieRecommendations = await listResponsesDao.findRecommendationsListResponse(movieId);

        if (dbMovieRecommendations) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbMovieRecommendations.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbMovieRecommendations.response);
                return;
            }
        }

        // fetch it from tmdb and update the database
        const clientFetchedMovieRecommendations = await client.getMovieRecommendations(movieId);

        // if we got a response
        if (clientFetchedMovieRecommendations) {
            // update the database if it is already in there
            if (dbMovieRecommendations) {
                await listResponsesDao.updateRecommendationsListResponse(movieId, clientFetchedMovieRecommendations);
            }

            // otherwise, create a new entry
            else {
                await listResponsesDao.createRecommendationsListResponse(movieId, clientFetchedMovieRecommendations);
            }

            res.send(clientFetchedMovieRecommendations);
        }
    }

    const findPopularMovies = async (req, res) => {
        const {timeRange} = req.params;

        // first check if it is in database
        const dbPopularMovies = await listResponsesDao.findPopularListResponse(timeRange);

        if (dbPopularMovies) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbPopularMovies.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbPopularMovies.response);
                return;
            }
        }

        // fetch it from tmdb and update the database
        const clientFetchedPopularMovies = await client.getPopularMovies(timeRange);

        // if we got a response
        if (clientFetchedPopularMovies) {
            // update the database if it is already in there
            if (dbPopularMovies) {
                await listResponsesDao.updatePopularListResponse(timeRange, clientFetchedPopularMovies);
            }

            // otherwise, create a new entry
            else {
                await listResponsesDao.createPopularListResponse(timeRange, clientFetchedPopularMovies);
            }

            res.send(clientFetchedPopularMovies);
        }


    }

    const findMoviesSearchResults = async (req, res) => {
        const {searchTerm} = req.params;

        // first check if it is in database
        const dbSearchResults = await listResponsesDao.findSearchListResponse(searchTerm);

        if (dbSearchResults) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbSearchResults.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbSearchResults.response);
                return;
            }
        }

        // fetch it from tmdb and update the database
        const clientFetchedSearchResults = await client.getMoviesSearchResults(searchTerm);

        // if we got a response
        if (clientFetchedSearchResults) {
            // update the database if it is already in there
            if (dbSearchResults) {
                await listResponsesDao.updateSearchListResponse(searchTerm, clientFetchedSearchResults);
            }

            // otherwise, create a new entry
            else {
                await listResponsesDao.createSearchListResponse(searchTerm, clientFetchedSearchResults);
            }

            res.send(clientFetchedSearchResults);
        }


    }

    app.get("/api/movies/:movieId/details", findMovieById);
    app.get("/api/movies/:movieId/credits", findMovieCredits);
    app.get("/api/movies/:movieId/recommendations", findMovieRecommendations);
    app.get("/api/popular/movies/:timeRange", findPopularMovies);
    app.get("/api/search/movies/:searchTerm", findMoviesSearchResults);
}


export default MovieRoutes;
