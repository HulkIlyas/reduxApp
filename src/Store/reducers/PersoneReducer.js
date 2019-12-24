import { ADD_PERSON } from "Store"
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
        case ADD_PERSON:
            return {
                Persons: [...state.Persons, action.payload]
            };
        case "DUBLICATE_USER":
            console.log(state)
            return {
                Persons: [...state.Persons, state.Persons[0]]
            }
        default:
            return state;
    }
}
export { PersonReducer };