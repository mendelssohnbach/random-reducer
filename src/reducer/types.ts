export type AppState = {
  counter: number;
  random: number;
};

// Actions
type Increment = {
  type: 'increment';
  payload: number;
};

type Random = {
  type: 'random';
};

export type AppActions = Increment | Random;
