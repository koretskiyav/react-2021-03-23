import {useState} from 'react';

export default function useAverageRate(reviews) {
  const totalRate = reviews.reduce((total, review) => {
    return total + review.rating;
  }, 0);

  const result = (totalRate / reviews.length).toFixed(1);
  const [averageRate, setAverageRate] = useState(result);

  return {averageRate, setAverageRate};
}
