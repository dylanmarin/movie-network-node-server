import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
        lastUpdated: {type: Date, default: new Date().getTime(), required: true},
        movieId: {type: Number, required: true},
        details: Object
    },
    {collection: "movieDetails"});

export default detailsSchema;
