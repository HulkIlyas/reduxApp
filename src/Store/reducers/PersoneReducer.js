
const initialState = {
    name: "ilyas ELMOUSAOUY",
    birthday: new Date("1994/07/13"),
    location: "Marrakech",
    job: "Developper",
    Exprience: "3 Years"
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