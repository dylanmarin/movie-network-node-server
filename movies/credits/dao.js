import model from "./model.js";

export const createMovieCredits = (credits) => {
    return model.create(
        {
            lastUpdated: new Date().getTime(),
            movieId: credits.id,
            credits: credits
        }
    );
}

export const findMovieCreditsById = (movieId) => {
    return model.findOne({movieId: parseInt(movieId)});
}

export const updateMovieCreditsById = (movieId, credits) => {
    return model.updateOne({movieId: parseInt(movieId)}, {$set: {credits: credits, lastUpdated: new Date().getTime()}});
}

export const deleteMovieCreditsById = (movieId) => {
    return model.deleteOne({movieId:  parseInt(movieId)});
}

