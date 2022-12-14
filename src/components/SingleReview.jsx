import  React, {useState, useEffect } from 'react';
import { getReview } from "../Api";
import { useParams } from "react-router-dom";
import SpecificReview from './SpecificReview';


const SingleReview = () => {
    const { review_slug } = useParams();
    const [review, setReview] = useState([])
    
    getReview(review_slug).then((reviewData) => {setReview(reviewData)});
    return SpecificReview(review);
    }

export default SingleReview;