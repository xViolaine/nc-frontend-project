import { useState } from "react";
import { createNewComment } from "../utils/API";

const CreateComment = ({ review_id, allComments, setAllComments }) => {
    const [body, setBody] = useState("");
    const [disableButton, setDisableButton] = useState(false);

    const handleSubmit = (event) => {
        setDisableButton(true)
        event.preventDefault();
        setAllComments([{
            "author": "jessjelly",
            "body": body,
            "comment_id": "dummy2",
            created_at: new Date(),
            review_id: review_id,
            votes: 0
        }, ...allComments]);
        createNewComment(review_id, {
            "username": "jessjelly",
            "body": body,
        }).then((res) => {
            setAllComments(oldComments => {
                const newComments = [ ...oldComments]
                newComments[0] = res.comment
                return newComments
            })
            setBody("")
            setDisableButton(false)
        })
            .catch((err) => {
                "An error occurred. Please try again later!"
                            })

    }

    return (
        <>
            <form className="CommentForm" onSubmit={handleSubmit}>
                <input placeholder="Comment" className="CommentFormInputs" type="text" id="comment" onChange={(event) => setBody(event.target.value)}
                    value={body} disabled={disableButton}/>
                <button type="submit" disabled={disableButton || body === ""}>Post Comment</button>
            </form>
        </>
    )
}

export default CreateComment;