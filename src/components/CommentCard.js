const CommentCard = ({ author, body, comment_id, votes, created_at, review_id }) => {

    function timeSince(timeStamp) {
        const now = new Date(),
            secondsPast = (now.getTime() - timeStamp) / 1000;
        if (secondsPast < 60) {
            return parseInt(secondsPast) + 's';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'm';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'h';
        }
        if (secondsPast <= 604800) {
            return parseInt(secondsPast / 86400) + 'd';
        }
        if (secondsPast > 604800) {
            const date = new Date(timeStamp);
            const day = date.getDate();
            const month = date.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
            const year = date.getFullYear() == now.getFullYear() ? "" : " " + date.getFullYear();
            return day + " " + month + year;
        }
    }

    return (
        <li className="CommentCard">
            <div className="CommentInfo">
            <p className="Author">{author}</p>
            <p className="CreatedAt">{timeSince(new Date(created_at).getTime())}</p>
            </div>
            <p className="CommentBody">{body}</p>
        </li>
    )
}

export default CommentCard;