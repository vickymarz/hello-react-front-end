import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import { getGreetingList } from '../redux/greetings/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  return (
    <div className="greeting">
      <h1>Greetings App</h1>
      <p>{greetings}</p>
      <Button className="btn" onClick={() => dispatch(getGreetingList())}>Greet</Button>
    </div>
  );
};

export default Greeting;
