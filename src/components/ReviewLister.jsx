import { useEffect, useState } from "react";
import Article from "./Article";

function ReviewLister(props){
    console.log(props)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(props.reviews.length>1){
            setLoading(false)
        }
    }, [props.reviews])
    if(loading){
        return <p>loading</p>
    }
return(
    
    <section className="reviews">
    <ul>
    {props.reviews.map(
        (
            review, index
        ) => {
            return (
            <Article review={review} key={index}/>
            )
        }
    )}
    </ul> 
</section>
        
);
}

export default ReviewLister;