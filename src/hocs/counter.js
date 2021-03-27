import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { decrement, increment, amount } = useAmount(0);

//     return (
//       <WrappedComponent
//         {...props}
//         decrement={decrement}
//         increment={increment}
//         amount={amount}
//       />
//     );
//   };

//   return HocComponent;
// };
