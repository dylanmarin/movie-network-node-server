import model from "./model.js";

export const createSearchListResponse = (searchTerm, searchListResponse) => {
    return model.create({
        lastUpdated: new Date().getTime(),
        searchType: "SEARCH",
        searchTerm: searchTerm,
        response: searchListResponse
    })
}

export const updateSearchListResponse = (searchTerm, searchListResponse) => {
    return model.updateOne({searchTerm: searchTerm}, {
        $set: {
            response: searchListResponse,
            lastUpdated: new Date().getTime()
        }
    });
}

export const findSearchListResponse = (searchTerm) => {
    return model.findOne({searchTerm: searchTerm});
}

export const createRecommendationsListResponse = (movieId, recommendationsListResponse) => {
    return model.create({
        lastUpdated: new Date().getTime(),
        searchType: "RECOMMENDATIONS",
        movieId: parseInt(movieId),
        response: recommendationsListResponse
    })
}

export const updateRecommendationsListResponse = (movieId, recommendationsListResponse) => {
    return model.updateOne({movieId: parseInt(movieId)}, {
        $set: {
            response: recommendationsListResponse,
            lastUpdated: new Date().getTime()
        }
    });
}

export const findRecommendationsListResponse = (movieId) => {
    return model.findOne({movieId: parseInt(movieId)});
}

export const createPopularListResponse = (timeRange, popularListResponse) => {
    return model.create({
        lastUpdated: new Date().getTime(),
        searchType: "POPULAR",
        timeRange: timeRange,
        response: popularListResponse
    })
}

export const updatePopularListResponse = (timeRange, popularListResponse) => {
    return model.updateOne({timeRange: timeRange}, {
        $set: {
            response: popularListResponse,
            lastUpdated: new Date().getTime()
        }
    });
}

export const findPopularListResponse = (timeRange) => {
    return model.findOne({timeRange: timeRange});
}
