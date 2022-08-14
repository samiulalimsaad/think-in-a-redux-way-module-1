const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

const render = () => {
    counterEl.innerText = store.getState().value;
};

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
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

const store = Redux.createStore(counterReducer);

store.subscribe(render);

incrementEl.onclick = () => {
    store.dispatch({ type: "increment", payload: 5 });
};

decrementEl.onclick = () => {
    store.dispatch({ type: "decrement", payload: 2 });
};
