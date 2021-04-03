import { useState } from 'react';

export default function useAmount(initialAmount = 0) {
  const [amount, setAmount] = useState(initialAmount);

  const decrement = () => setAmount(amount && amount - 1);
  const increment = () => setAmount(amount + 1);

  return { decrement, increment, amount };
}
