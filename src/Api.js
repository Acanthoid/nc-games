export const getReviews =() => {
return fetch('https://game-reviews-rated.herokuapp.com/api/reviews')
.then((res) => res.json());
};

export const getCategory =(category_slug) => {
return fetch(`https://game-reviews-rated.herokuapp.com/api/reviews/?category=${category_slug}`)
.then((res) => res.json());
};

export const getReview = (review_id) => {
    console.log(review_id,'api review id')
return fetch(`https://game-reviews-rated.herokuapp.com/api/reviews/${review_id}`)
.then((res) => res.json());
}

export const getNavs =() => {
    return fetch(`https://game-reviews-rated.herokuapp.com/api/categories`)
    .then((res) => res.json());
    };

export const addVoteToApi = (review_id) => {
    console.log(review_id, 'api')
    return fetch(`https://game-reviews-rated.herokuapp.com/api/reviews/${review_id}`, 
    {
        method: "PATCH",
        body: JSON.stringify({ inc_votes: 1}),
        headers: {"Content-type": "application/json; charset=UFT-8"},
    }
    ).then((res) => res.json()).then((out) => console.log(out));
};