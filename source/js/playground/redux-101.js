import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = (payload = {}) => ({
  type: 'DECREMENT',
  decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1,
});

const resetCount = () => ({
  type: 'RESET',
  count: 0,
});

const setCount = ({ count = 10 } = {}) => ({
  type: 'SET',
  count,
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  console.log('running');
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { ...state, count: state.count - action.decrementBy };
    case 'RESET':
      return { ...state, count: action.count };
    case 'SET':
      return { ...state, count: action.count };
    default:
      return state;
  }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Actions - an object that gets sent to the store

// Increment count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


// By calling unsubscribe we stop subscribing to the store.subscribe();

// Decrement Count
store.dispatch(decrementCount({ decrementBy: 3 }));


// Reset Count
store.dispatch(resetCount());

// SET Count
store.dispatch(setCount());

unsubscribe();
