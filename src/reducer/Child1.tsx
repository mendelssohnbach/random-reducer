import React from 'react';
import './RandomReducer.css';

// Child1 Component
const Child1 = React.memo((props: { value: number }) => {
  console.log('Panel1: render');
  return <div className="comp">Count: {props.value}</div>;
});

export default Child1;
