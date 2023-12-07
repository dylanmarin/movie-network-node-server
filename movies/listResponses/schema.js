import mongoose from "mongoose";

const listResponsesSchema = new mongoose.Schema({
        lastUpdated: {type: Date, default: new Date().getTime(), required: true},
        searchType: {type: String, enum: ["RECOMMENDATIONS", "SEARCH", "POPULAR", "COMPANY"], required: true},
        searchTerm: String,
        movieId: Number,
        timeRange: {type: String, enum: ["day", "week"]},
        companyId: Number,
        response: [Object]
    },
    {collection: "moviesListResponses"});

export default listResponsesSchema;
