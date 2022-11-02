export const getReviews =() => {
return fetch('https://game-reviews-rated.herokuapp.com/api/reviews')
.then((res) => res.json());
};

export const getCategory =(category_slug) => {
return fetch(`https://game-reviews-rated.herokuapp.com/api/reviews/?category=${category_slug}`)
.then((res) => res.json());
};

export const getReview = (review_id) => {
return fetch(`https://game-reviews-rated.herokuapp.com/api/reviews/${review_id}`)
.then((res) => res.json());
}