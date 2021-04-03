import React from 'react';
import useAmount from './use-amount.hook';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.amount);
  return <WrappedComponent {...props} {...amountProps} />;
};
