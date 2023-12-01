import mongoose from "mongoose";

const creditsSchema = new mongoose.Schema({
        lastUpdated: {type: Date, default: new Date().getTime(), required: true},
        movieId: {type: Number, required: true},
        credits: Object
    },
    {collection: "movieCredits"});

export default creditsSchema;
