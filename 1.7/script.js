const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");
const increment5El = document.querySelector("#increment5");
const decrement5El = document.querySelector("#decrement5");

const render = () => {
    counterEl.innerText = store.getState().value;
};

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (payload = 1) => ({ type: INCREMENT, payload });

const decrement = (payload = 1) => ({ type: DECREMENT, payload });

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DECREMENT:
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
    store.dispatch(increment());
};

decrementEl.onclick = () => {
    store.dispatch(decrement());
};

increment5El.onclick = () => {
    store.dispatch(increment(5));
};

decrement5El.onclick = () => {
    store.dispatch(decrement(2));
};
