import { ADD_ONE, MINUS_ONE, UPDATE_COUNT } from "Store"
const initialState = {
    count: 0
};


const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                count: state.count + 1
            };
        case MINUS_ONE:
            return {
                count: state.count - 1
            };
        case UPDATE_COUNT:
            console.log(action)
            return {

                count: action.payload
            }
        default:
            return state;
    }
}
export { CounterReducer };