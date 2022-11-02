import { Link } from "react-router-dom";

function Article({review}){
    const linkId = `/reviews/${review.review_id}`
    return (
        <li key={review.review_id}>
            
            <Link to={linkId}><img className='img' review_id={review.review_id} src={review.review_img_url}/></Link>
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