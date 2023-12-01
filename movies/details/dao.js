import model from "./model.js";

export const createMovieDetails = (movie) => {
    return model.create(
        {
            lastUpdated: new Date().getTime(),
            movieId: movie.id,
            details: movie
        }
    );
}

export const findMovieDetailsById = (movieId) => {
    return model.findOne({movieId: parseInt(movieId)});
}

export const updateMovieDetailsById = (movieId, movie) => {
    return model.updateOne({movieId: parseInt(movieId)}, {$set: {details: movie, lastUpdated: new Date().getTime()}});
}

export const deleteMovieDetailsById = (movieId) => {
    return model.deleteOne({movieId:  parseInt(movieId)});
}

