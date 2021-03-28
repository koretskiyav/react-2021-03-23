import {useState} from 'react';

export default function useAverageRate(reviews) {
  const result = reviews.reduce((total, review) => {
    return total + review.rating;
  }, 0) / reviews.length;
  
  const [averageRate, setAverageRate] = useState(result);

  return {averageRate, setAverageRate};
}
