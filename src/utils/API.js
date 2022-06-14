import axios from 'axios'

const GLHFGamingAPI = axios.create({
    baseURL: "https://nc-backend-project-rest-api.herokuapp.com/api"
});

export const getAllReviews = () => {
    return GLHFGamingAPI.get("/reviews").then(({ data }) => {
        console.log(data)
        return data.reviews;
    })
}

export const getReviewByID = (review_id) => {
    return GLHFGamingAPI.get(`/reviews/${review_id}`).then(({ data }) => {
        console.log(data)
        return data.reviews;
    })
}