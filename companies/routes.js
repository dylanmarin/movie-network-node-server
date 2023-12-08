import * as client from "../tmdb/client.js";
import * as companiesDao from "./dao.js";
import * as listResponsesDao from "../movies/listResponses/dao.js";
import {getMoviesByProductionCompany} from "../tmdb/client.js";

function CompanyRoutes(app) {
    const findCompanyById = async (req, res) => {
        const {companyId} = req.params;

        // first check if it is in database
        const dbCompanyDetails = await companiesDao.findCompanyById(companyId);

        if (dbCompanyDetails) {
            // check if it is within 1 day by the calendar
            const now = new Date();
            const lastUpdated = new Date(dbCompanyDetails.lastUpdated);
            const diff = now - lastUpdated;
            const diffInDays = diff / (1000 * 3600 * 24);

            // if it is within 1 day, return it
            if (diffInDays < 1) {
                res.send(dbCompanyDetails.details);
                return;
            }
        }

        let clientFetchedCompanyDetails;

        // fetch it from tmdb and update the database
        try {
            clientFetchedCompanyDetails = await client.getProductionCompanyDetails(companyId);
        } catch (e) {
            clientFetchedCompanyDetails = null;
        }

        // if we got a response
        if (clientFetchedCompanyDetails) {
            // update the database if it is already in there
            if (dbCompanyDetails) {
                await companiesDao.updateCompanyDetailsById(companyId, clientFetchedCompanyDetails);
            }

            // otherwise, create a new entry
            else {
                await companiesDao.createCompanyDetails(companyId, clientFetchedCompanyDetails);
            }

        }
        res.send(clientFetchedCompanyDetails);
    }


    const findMoviesByCompany = async (req, res) => {
        const {companyId} = req.params;

        // first check if it is in database
        const dbSearchResults = await listResponsesDao.findCompanyListResponse(companyId);

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


        let clientFetchedMovies;

        // fetch it from tmdb and update the database
        try {
            clientFetchedMovies = await client.getMoviesByProductionCompany(companyId);
        } catch (e) {
            clientFetchedMovies = null;
        }

        // if we got a response
        if (clientFetchedMovies) {
            // update the database if it is already in there
            if (dbSearchResults) {
                await listResponsesDao.updateCompanyListResponse(companyId, clientFetchedMovies);
            }

            // otherwise, create a new entry
            else {
                await listResponsesDao.createCompanyListResponse(companyId, clientFetchedMovies);
            }

        }
        res.send(clientFetchedMovies);
    }


    app.get("/api/companies/:companyId/details", findCompanyById);
    app.get("/api/companies/:companyId/movies", findMoviesByCompany);
}


export default CompanyRoutes;
