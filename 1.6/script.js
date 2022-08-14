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
                value: state.value + 1,
            };
        case "decrement":
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return state;
    }
};

const store = Redux.createStore(counterReducer);

store.subscribe(render);

incrementEl.onclick = () => {
    store.dispatch({ type: "increment" });
};

decrementEl.onclick = () => {
    store.dispatch({ type: "decrement" });
};
