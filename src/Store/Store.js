
import { createStore } from 'redux';
import { CounterReducer } from 'Store';

const store = createStore(
    // combineReducers({
    CounterReducer
    // })
);

export { store };