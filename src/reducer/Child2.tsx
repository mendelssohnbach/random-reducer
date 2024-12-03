import React from 'react';
import './RandomReducer.css';

// Child2 Component
const Child2 = React.memo((props: { value: number }) => {
  console.log('Panel2: render');
  return <div className="comp">Random Value: {props.value}</div>;
});

export default Child2;
