import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../Api.js";
import ReviewLister from "./ReviewLister.jsx";

const SingleCategory = () => {
    const [reviews, setReviews] = useState ([])
    const { category_slug } = useParams();
    console.log(category_slug)

    useEffect(() => {
        getCategory(category_slug).then((categoryData) => {setReviews(categoryData)});
    }, [category_slug]);
return <ReviewLister reviews={reviews} />

};

export default SingleCategory;