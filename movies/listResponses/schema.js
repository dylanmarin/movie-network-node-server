import mongoose from "mongoose";

const listResponsesSchema = new mongoose.Schema({
        lastUpdated: {type: Date, default: new Date().getTime(), required: true},
        searchType: {type: String, enum: ["RECOMMENDATIONS", "SEARCH", "POPULAR"], required: true},
        searchTerm: String,
        movieId: Number,
        timeRange: {type: String, enum: ["day", "week"]},
        response: [Object]
    },
    {collection: "moviesListResponses"});

export default listResponsesSchema;
