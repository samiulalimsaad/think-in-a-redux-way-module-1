const actions = [
    { type: "increment", payload: 1 },
    { type: "increment", payload: 5 },
    { type: "increment", payload: 1 },
    { type: "decrement", payload: 2 },
];

const initialState = {
    value: 0,
};

const counterReducer = (state, action) => {
    console.log({ state, action });
    switch (action.type) {
        case "increment":
            return {
                ...state,
                value: state.value + action.payload,
            };
        case "decrement":
            return {
                ...state,
                value: state.value - action.payload,
            };

        default:
            return state;
    }
};

const result = actions.reduce(counterReducer, initialState);
console.log(result);
