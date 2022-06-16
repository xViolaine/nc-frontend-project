import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewByID, changeVote } from "../utils/API";
import CommentList from "./CommentList";

export const SingleReview = () => {
  const [votes, setVotes] = useState(0);

    const [review, setSingleReview] = useState({});
    const { review_id } = useParams();
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (review_id) {
            getReviewByID(review_id).then((reviewFromAPI) => {
                setSingleReview(reviewFromAPI);
            })
        }

    }, []);

    const handleUpvote = () => {
        if (votes === 0) {
            setVotes((currCount) => currCount + 1);
        } else if (votes === 1) {
            setVotes((currCount) => currCount - 1);
        } else if (votes === -1) {
            setVotes((currCount) => currCount + 2);
        }
        setErr(null);
        changeVote(review_id, {"inc_votes": 1}).catch((err) => {
            setVotes((currCount) => currCount - 1);
            setErr('Something went wrong, please try again.')
        });
    };

    const handleDownvote = () => {
        if (votes === 0) {
            setVotes((currCount) => currCount - 1);
        } else if (votes === -1) {
            setVotes((currCount) => currCount + 1);
        } else if (votes === 1) {
            setVotes((currCount) => currCount - 2);
        }
        setErr(null);
        changeVote(review_id, {"inc_votes": -1}).catch((err) => {
            setVotes((currCount) => currCount + 1);
            setErr('Something went wrong, please try again.')
        })
    }



    if (err) return <p>{err}</p>;
    return (
        <div className="SingleReviewContainer">
            <h1 className="SingleReviewHeading">{review.title}</h1>
            <div className="imageContainer">
                <img alt="Game Review" className="SingleReviewImage" src={review.review_img_url} />
                <div className="Votes">
                    <i onClick={handleDownvote}><span class={`material-symbols-outlined ${votes === -1 ? "Downvote-active" : "Downvote"}`}>arrow_downward</span></i>
                    <br/>
                    <div className={`VotesBetweenArrows ${votes >= 10 ? "Over10" : ""}`}>{review.votes + votes}</div>
                    <i onClick={handleUpvote}><span className={`material-symbols-outlined ${votes === 1 ? "Upvote-active" : 'Upvote'}`}>arrow_upward</span></i>
                </div>
            </div>
            <ul className="SingleReviewData">
                <li><div className="SingleReviewDataHeader">Created by:</div>{review.owner}</li>
                <li><div className="SingleReviewDataHeader">Created at:</div>{new Date(review.created_at).toDateString()}</li>
            </ul>

            <p className="SingleReviewContent">{review.review_body}</p>
            <CommentList review_id={review_id}/>
        </div>

    )
}