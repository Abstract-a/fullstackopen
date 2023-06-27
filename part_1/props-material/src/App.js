import { useState } from 'react';
import Display from './Display.js';
import Btn from './Btn.js';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    setCounter((prev) => prev - 1);
  };

  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Btn handleClick={increaseHandler} title="increase" />
      <Btn handleClick={decreaseHandler} title="decrease" />
      <Btn handleClick={setToZero} title="zero" />
    </div>
  );
};

export default App;
