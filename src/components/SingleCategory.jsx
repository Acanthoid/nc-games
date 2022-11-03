import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../Api.js";
import ReviewLister from "./ReviewLister.js";

const SingleCategory = () => {
    const [category, setCategory] = useState ([])
    const { category_slug } = useParams();

    useEffect(() => {
        getCategory(category_slug).then((categoryData) => {setCategory(categoryData)});
    }, [category_slug]);
if('msg' in category){
    return <p>There are no reviews in this category</p>
} else {return ReviewLister(category)}

};

export default SingleCategory;