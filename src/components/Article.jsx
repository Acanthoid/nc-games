

function Article({review}){
    return (
        <li key={review.review_id}>
            <img className='img' src={review.review_img_url}/>
            <br/>
            <br/>
            Name: {review.title}
            <br/>
            <br/>
            Review: {review.review_body}
            <br/>
            <br/>
        </li>
    )
}

export default Article;