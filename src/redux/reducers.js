
import { INCREASE_COUNT, DECREASE_COUNT } from './actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1 < 0 ? 0 : state.counter - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
