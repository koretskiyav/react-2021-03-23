import React, { useContext } from 'react';
import { rates } from '../currency-switcher/currencies';

import { currencyContext } from '../../contexts/currency-context';

const CurrencySwitcher = () => {
  const { setCurrency } = useContext(currencyContext);

  const handleChange = (event) => setCurrency(event.target.value);

  return (
    <div>
      <select onChange={handleChange}>
        {Object.keys(rates).map((curr) => (
          <option key={curr} value={curr}>{curr}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySwitcher;
