import mongoose, {Schema} from "mongoose";

const reviewSchema = new mongoose.Schema({
        userId: {type: Schema.Types.ObjectId, required: true},
        username: {type: String, required: true},
        movieId: {type: String, required: true},
        reviewText: {type: String, required: true},
        rating: {type: Number, required: true},
        date: {type: Date, required: true},
    },
    {collection: "reviews"});
export default reviewSchema;
