import model from "./model.js";

export const findReviewById = (reviewId) => {
    return model.findOne({_id: reviewId}).populate("user");
}

export const createReview = (review) => model.create(review);

export const findAllReviews = (userId) => model.find().populate("user");

export const updateReview = (reviewId, review) => {
    return model.updateOne({_id: reviewId}, {$set: review});
}

export const deleteReview = (reviewId) => model.deleteOne({_id: reviewId});

