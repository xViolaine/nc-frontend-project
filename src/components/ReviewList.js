import ReviewCard from "./ReviewCard"
import { useState, useEffect } from 'react';
import { getAllReviews } from "../utils/API";

const ReviewList = ({reviewByID, setReviewByID}) => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        getAllReviews().then((reviewsFromAPI) => {
            console.log(reviewsFromAPI)
            setAllReviews(reviewsFromAPI)
        })
    }, []);

    console.log(allReviews)

    return (
        <ul className="ReviewList">
            {allReviews.map((review) => {
                const { review_id, title, owner, review_img_url, category, created_at, comment_count, votes, review_body } = review;

                return (
                    <ReviewCard
                        key={review_id}
                        title={title}
                        owner={owner}
                        review_img_url={review_img_url}
                        category={category}
                        created_at={created_at}
                        comment_count={comment_count}
                        review_id={review_id}
                        votes={votes}
                        review_body={review_body}
                        />
)
            })}
        </ul>


    )

}

export default ReviewList;