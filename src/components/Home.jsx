import { getReviews } from "../Api.js";
import {useState, useEffect } from 'react';
import ReviewLister from "./ReviewLister.jsx";

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
    return <ReviewLister reviews={reviews} />
}

export default Home;