import axios from 'axios'

const GLHFGamingAPI = axios.create({
    baseURL: "https://nc-backend-project-rest-api.herokuapp.com/api"
});

export const getReviews = (category) => {
    return GLHFGamingAPI.get("/reviews", {params: {category: category}}).then(({ data }) => {
        return data.reviews;
    })
}

export const getReviewByID = (review_id) => {
    return GLHFGamingAPI.get(`/reviews/${review_id}`).then(({ data }) => {
        return data.review;
    })
}
 
export const getAllCategories = () => {
    return GLHFGamingAPI.get("/categories").then(({data}) => {
        return data.categories;
    })
}

export const changeVote = (review_id, body) => {
    return GLHFGamingAPI.patch(`/reviews/${review_id}`, body).then(({data}) => {
        return data;
    })
}

export const getAllComments = (review_id) => {
    return GLHFGamingAPI.get(`/reviews/${review_id}/comments`).then(({data}) => {
        return data.comments;
    })
}