import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen">
    <div className='w-1/3 h-1/3 bg-gray-300 flex flex-col items-center justify-center rounded-md drop-shadow'>
      <h1 className="text-4xl font-bold mb-4" >{counter}</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
        {/* <span className="mx-4 text-2xl">{counter}</span> */}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
      </div>
      </div>
    </div>
  );
};

export default Counter;
