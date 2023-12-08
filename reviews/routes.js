import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const findAllReviews = async (req, res) => {
        try {
            res.send(await dao.findAllReviews());
        } catch (e) {
            res.send(null);
        }
    }

    const createReview = async (req, res) => {
        try {
            const review = await dao.createReview(req.body);
            res.send(review)
        } catch (e) {
            res.send(null)
        }
    }

    const findReviewById = async (req, res) => {
        const {reviewId} = req.params;
        try {
            const review = await dao.findReviewById(reviewId);
            res.send(review);
        } catch (e) {
            res.send(null);
        }
    }

    const updateReview = async (req, res) => {
        const {reviewId} = req.params;
        try {
            const review = await dao.updateReview(reviewId, req.body);
            res.send(review);
        } catch (e) {
            res.send(null);
        }
    }

    const deleteReview = async (req, res) => {
        const {reviewId} = req.params;
        try {
            const status = await dao.deleteReview(reviewId);
            res.send(status);
        } catch (e) {
            res.send(null);
        }
    }

    app.get("/api/reviews", findAllReviews);
    app.post("/api/reviews", createReview);
    app.get("/api/reviews/:reviewId", findReviewById);
    app.put("/api/reviews/:reviewId", updateReview);
    app.delete("/api/reviews/:reviewId", deleteReview);
}

export default ReviewsRoutes;
