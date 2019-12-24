import { CREATE_PERSON } from "Store"
const initialState = {
    Persons: [
        {
            firstName: "ilyas",
            lastName: "ELMOUSAOUY",
            birthday: new Date("1994/07/13"),
            Job: "IT Developer"
        }
    ]
};


const PersonReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_PERSON:
            console.log(state)
            return {
                Persons: [...state.Persons, action.payload]
            }
        default:
            return state;
    }
}
export { PersonReducer };