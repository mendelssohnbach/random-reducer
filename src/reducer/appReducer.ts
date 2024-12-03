import { AppActions, AppState } from './types';

// Declare Reducer
function appReducer(state: AppState, action: AppActions) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'random':
      return {
        ...state,
        random: Math.random(),
      };
    default:
      return state;
  }
}

export default appReducer;
