import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8">Counter App</h1>
      <div className="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-200 rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">{counter}</h1>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg drop-shadow"
            onClick={() => dispatch(decrementCounter())}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg derop-shadow"
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
