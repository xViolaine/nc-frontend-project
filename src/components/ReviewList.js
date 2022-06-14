import ReviewCard from "./ReviewCard"
import { useState, useEffect } from 'react';
import { getReviews } from "../utils/API";
import { useSearchParams } from "react-router-dom"

const ReviewList = ({reviewByID, setReviewByID}) => {
    const [allReviews, setAllReviews] = useState([]);


    const [search, setSearch] = useSearchParams();
    console.log(search.get('category'))
const category = search.get('category')

    useEffect(() => {
        getReviews(category).then((reviewsFromAPI) => {
            setAllReviews(reviewsFromAPI);
        })
    }, [category]);

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