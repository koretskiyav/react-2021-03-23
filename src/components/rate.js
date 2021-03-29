import React from 'react';

export default function Rate(props) {
  const { value } = props;
  let rate = value;
  if ((value ^ 0) === value) {
    rate = value + '.0';
  }

  return <div>Rate: {rate}</div>;
}
