import getReviews from "../Api";
import {useState, useEffect } from 'react'

function Home() {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        getReviews().then(( reviews ) => {
            setReviews(reviews);
            setIsLoading(false)
        });
    }, []);

if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section className="reviews">
            <ul>
            {reviews.map(
                ({
                    review_id,
                    title,
                    review_body,
                    review_img_url,
                }) => {
                    return (
                        <li key={review_id}>
                            <img className='img' src={review_img_url}/>
                            <br/>
                            <br/>
                            Name: {title}
                            <br/>
                            <br/>
                            Review: {review_body}
                            <br/>
                            <br/>
                        </li>
                    )
                }
            )}
            </ul>
        </section>
        
    )
}

export default Home;