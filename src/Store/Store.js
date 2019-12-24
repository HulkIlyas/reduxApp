
import { createStore, combineReducers } from 'redux';
import { CounterReducer, PersonReducer } from 'Store';

const store = createStore(
    combineReducers({
        Counter: CounterReducer,
        Persons: PersonReducer
    })
);
export { store };