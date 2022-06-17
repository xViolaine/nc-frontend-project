import ReviewCard from "./ReviewCard"
import { useState, useEffect } from 'react';
import { getReviews } from "../utils/API";
import { useSearchParams } from "react-router-dom"

const ReviewList = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [search, setSearch] = useSearchParams();
    const category = search.get('category')
    const order = search.get('order')
    const sort_by = search.get('sort_by')



    useEffect(() => {
        getReviews(category, order, sort_by).then((reviewsFromAPI) => {
            setAllReviews(reviewsFromAPI);
        })
    }, [category, order, sort_by]);

    return (
        <ul className="ReviewList">
            <div className="ASC/DESC">
                <button onClick={() => {
                    setSearch({ order: "asc", ...(category ? { category } : undefined), ...(sort_by ? { sort_by } : undefined) })
                }}>ASC</button>

                <button onClick={() => {
                    setSearch({ order: "desc", ...(category ? { category } : undefined), ...(sort_by ? { sort_by } : undefined) })
                }}>DESC</button>
            </div>

            <label for="sort_by">Sort by: </label>
            <select onChange={(event) => {
                setSearch({ sort_by: event.target.value, ...(order ? { order } : undefined), ...(category ? { category } : undefined) })
            }} name="sort_by" id="sort_by">
                <option value="created_at">Date</option>
                <option value="comment_count"> Comments</option>
                <option value="votes">Votes</option>
            </select>
            {
                allReviews.map((review) => {
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
                })
            }
        </ul >


    )

}

export default ReviewList;