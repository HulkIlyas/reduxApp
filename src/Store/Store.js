
import { createStore } from 'redux';
import { CounterReducer } from 'Store';

const store = createStore(CounterReducer);

export { store };