const getReviews =() => {
return fetch('https://game-reviews-rated.herokuapp.com/api/reviews')
.then((res) => res.json());
};
export default getReviews