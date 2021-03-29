import React from 'react';

export const Rate = (props) => {
  return <p>{new Array(props.value).fill(`✪`)}</p>;
};
