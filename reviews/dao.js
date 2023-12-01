import model from "./model.js";

export const findReviewById = (reviewId) => model.findOne({_id: reviewId});

export const createReview = (review) => model.create(review);

export const findAllReviews = (userId) => model.find();

export const updateReview = (reviewId, review) => model.updateOne({_id: reviewId}, {$set: review});

export const deleteReview = (reviewId) => model.deleteOne({_id: reviewId});

