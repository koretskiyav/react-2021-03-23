import { useMemo } from 'react';

export default function useCommonRate(rates = []) {
    const rate = useMemo(
      () => Math.round(rates.reduce((sum, rate) => sum + rate, 0) / rates.length), 
      [rates]
    )
    return { rate };
}
