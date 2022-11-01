import Article from "./Article";

function ReviewLister(list){
return(
    
    <section className="reviews">
    <ul>
    {list.map(
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
        
);
}

export default ReviewLister;