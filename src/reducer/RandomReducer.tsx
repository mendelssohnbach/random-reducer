// https://www.fabiobiondi.dev/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript/

import appReducer from './appReducer';
import Child1 from './Child1';
import Child2 from './Child2';
import Parent from './Parent';
import './RandomReducer.css';

import { useReducer } from 'react';

export default function RandomReducer() {
  const [state, dispatch] = useReducer(appReducer, { counter: 0, random: 0 });

  const IncrementButton = () => {
    return (
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        +10 INCREMENT Action
      </button>
    );
  };

  const RandomButton = () => {
    return <button onClick={() => dispatch({ type: 'random' })}>RANDOM Action</button>;
  };

  return (
    <div className="comp">
      <h1>React Reducer</h1>
      <IncrementButton />
      <RandomButton />
      <Parent>
        <Child1 value={state.counter} />
        <Child2 value={state.random} />
      </Parent>
    </div>
  );
}
