import { useState, useEffect } from "react";
import { getAllComments } from "../utils/API";
import CommentCard from "./CommentCard";

const CommentList = ({review_id}) => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        getAllComments(review_id).then((commentsFromAPI) => {
            setAllComments(commentsFromAPI);
        })
    }, [])


    return (
        <ul className="CommentList">
            {allComments.map((comment) => {
                const { author, body, comment_id, votes, created_at, review_id } = comment;

                return (
                    <CommentCard
                        key={comment_id}
                        author={author}
                        body={body}
                        votes={votes}
                        created_at={created_at}
                    />
                )
            })}
        </ul>
    )
}

export default CommentList;