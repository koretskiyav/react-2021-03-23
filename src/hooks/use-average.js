import { useMemo } from 'react';

export default function useAverage(nums = []) {
    const average = useMemo(
      () => Math.round(nums.reduce((sum, num) => sum + num, 0) / nums.length), 
      [nums]
    )
    return average;
}
