import mongoose, {Schema} from "mongoose";

const reviewSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
        movieId: {
            type: Number,
            ref: "movieDetails",
            required: true
        },
        reviewText: {type: String, required: true},
        rating: {type: Number, required: true},
        date: {type: Date, required: true, default: new Date().getTime()},
    },
    {collection: "reviews"});
export default reviewSchema;
