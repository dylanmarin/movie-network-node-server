import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
        movieId: {
            type: Number,
            ref: "movieDetails",
            required: true
        },
        movieTitle: {
            type: String,
            required: true
        },
        posterURL: {
            type: String,
            required: true
        },
        movieReleaseDate: {
            type: String,
            required: true
        },
        reviewText: {type: String, required: true},
        rating: {type: Number, required: true},
        reviewDate: {type: Date, required: true, default: new Date().getTime()},
    },
    {collection: "reviews"});

reviewSchema.virtual("movie", {
    ref: "movieDetails",
    localField: "_id",
    foreignField: "movieId",
});

export default reviewSchema;
