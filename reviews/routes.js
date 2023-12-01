import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const findAllReviews = async (req, res) => {
        res.send(await dao.findAllReviews());
    }

    const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.send(review)
    }

    const findReviewById = async (req, res) => {
        const {reviewId} = req.params;
        const review = await dao.findReviewById(reviewId);
        res.send(review);
    }

    const updateReview = async (req, res) => {
        const {reviewId} = req.params;
        const review = await dao.updateReview(reviewId);
        res.send(review);
    }

    const deleteReview = async (req, res) => {
        const {reviewId} = req.params;
        const status = await dao.deleteReview(reviewId);
        res.send(status);
    }


    app.get("/api/reviews", findAllReviews);
    app.post("/api/reviews", createReview);
    app.get("/api/reviews/:reviewId", findReviewById);
    app.put("/api/reviews/:reviewId", updateReview);
    app.delete("/api/reviews/:reviewId", deleteReview);
}

export default ReviewsRoutes;
