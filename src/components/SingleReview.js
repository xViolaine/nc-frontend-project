import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewByID } from "../utils/API";

export const SingleReview = () => {
    const [review, setSingleReview] = useState({});
    const { review_id } = useParams();

    useEffect(() => {
        if (review_id) {
            getReviewByID(review_id).then((reviewFromAPI) => {
                setSingleReview(reviewFromAPI);
                console.log(reviewFromAPI)
            })
        }

    }, [review_id]);

    return (
        <div className="SingleReviewContainer">
        <h1 className="SingleReviewHeading">{review.title}</h1>
        <img alt="Game Review" className="SingleReviewImage" src={review.review_img_url} />
        <ul className="SingleReviewData">
            <li><div className="SingleReviewDataHeader">Created by:</div>{review.owner}</li>
            <li><div className="SingleReviewDataHeader">Created at:</div>{new Date(review.created_at).toDateString()}</li>
            </ul>
            <p className="SingleReviewContent">{review.review_body}</p>
        </div>

    )
}