export default function useAverageRate(reviews) {
  const totalRate = reviews.reduce((total, review) => {
    return total + review.rating;
  }, 0);

  return (totalRate / reviews.length).toFixed(1);
}
