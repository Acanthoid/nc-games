import getReviews from "../Api";
import {useState, useEffect } from 'react'
import Article from "./Article";

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
                (
                    review
                ) => {
                    return (
                    <Article review={review}/>
                    )
                }
            )}
            </ul>
        </section>
        
    )
}

export default Home;