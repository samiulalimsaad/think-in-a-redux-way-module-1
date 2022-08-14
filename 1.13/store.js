const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
    value1: 0,
};

const counterReducer = (state = initialState, action) => {
    if (action?.payload?.name && state[action?.payload?.name] === undefined) {
        state[action?.payload?.name] = 0;
    }
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                [action.payload.name]:
                    state[action.payload.name] + action.payload.value,
            };
        case DECREMENT:
            return {
                ...state,
                [action.payload.name]:
                    state[action.payload.name] - action.payload.value,
            };

        default:
            return state;
    }
};

const store = Redux.createStore(counterReducer);
