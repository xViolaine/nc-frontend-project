const ReviewCard = ( { review_id, title, owner, review_img_url, category, created_at, comment_count, votes, review_body }) => {
    const readMore = review_body.substring(0, 100) + ".."

    return (
        <li className="ReviewCard">
            <h2 id="ReviewCardTitle">{title}</h2>
            <img className="ReviewImage" alt="Game Review" src={review_img_url} />
            <p className="Preview">{readMore}</p>
            <p className="ReadMore">Read More</p>

        </li>
    )
}

export default ReviewCard