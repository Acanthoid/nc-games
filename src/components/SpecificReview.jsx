import AddVote from "./AddVote";

const SpecificReview = (review) => {
    const why = review;
    const reviewProp = why.review_id;
    const voteProp = why.votes;
console.log(review, 'review')
    return (
        <li key={review.review_id}>
            <img review_id={review.review_id} className='img' alt='The game being played' src={review.review_img_url}/>
            <br/>
            <br/>
            Category: {review.category}
            <br/>
            <br/>
            Designer: {review.designer}
            <br/>
            <br/>
            Name: {review.title}
            <br/>
            <br/>
            Posted by: {review.owner}
            <br/>
            <br/>
            Posted on: {review.created_at}
            <br/>
            <br/>
            Review: {review.review_body}
            <br/>
            <br/>
            Comments: {review.comment_count}
            <br/>
            <br/>
            Votes: {review.votes}
            <AddVote review_id={reviewProp} votes={voteProp}/>
        </li>
    )
}

export default SpecificReview;
