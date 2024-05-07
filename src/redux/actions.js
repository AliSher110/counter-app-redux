export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT    ';

export const incrementCounter = () => ({
  type: INCREASE_COUNT
});

export const decrementCounter = () => ({
  type: DECREASE_COUNT
});
