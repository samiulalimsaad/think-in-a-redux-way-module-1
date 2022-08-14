// action types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// initialState
const initialState = {
    value1: 0,
};

// reducer for different actions
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

        case RESET:
            const newState = {};
            Object.keys(state).map((c) => (newState[c] = 0));
            return newState;

        default:
            return state;
    }
};

// create store
const store = Redux.createStore(counterReducer);

// action creators
const incrementAction = (id, value) => {
    return {
        type: INCREMENT,
        payload: { value, name: "value" + id },
    };
};

const decrementAction = (id, value) => {
    return {
        type: DECREMENT,
        payload: { value, name: "value" + id },
    };
};

const resetAction = () => {
    return {
        type: RESET,
    };
};
