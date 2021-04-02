import { useState } from 'react';

export default function useRate(initialValue = 0) {
    const [rate, setRate] = useState(initialValue)
    const handleClick = (e) => setRate(e.currentTarget.dataset.index)

  return { rate, setRate: handleClick };
}
