// nodes
const counterContainerEl = document.querySelector("#counter-container");
const addCounterContainerEl = document.querySelector("#add-counter-container");
const resetCounterContainerEl = document.querySelector(
    "#reset-counter-container"
);

// event listener for add counter button
addCounterContainerEl.onclick = () => {
    // set random value for increment and decrement
    const randomInc = Math.round(Math.random() * 15 + 1);
    const randomDec = Math.round(Math.random() * 5 + 1);

    const elArray = counterContainerEl.children;
    const template = counterContainerEl.innerHTML;

    // update
    counterContainerEl.innerHTML =
        template +
        `
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow my-5"
                >
                    <div id="count${
                        elArray.length + 1
                    }-value" class="text-2xl font-semibold">
                        0
                    </div>
                    <div class="flex space-x-3">
                        <button
                            id="increment${elArray.length + 1}"
                            onclick="incrementValue(${
                                elArray.length + 1
                            },${randomInc})"
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment (+${randomInc})
                        </button>
                        <button
                            id="decrement${elArray.length + 1}"
                            onclick="decrementValue(${
                                elArray.length + 1
                            },${randomDec})"
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement (-${randomDec})
                        </button>
                    </div>
                </div>
                `;
};

// dispatcher functions
const incrementValue = (id, value) => {
    store.dispatch(incrementAction(id, value));
};

const decrementValue = (id, value) => {
    store.dispatch(decrementAction(id, value));
};

// Reset all value to initialState
resetCounterContainerEl.onclick = () => {
    store.dispatch(resetAction());
};

// render function to update UI
const render = () => {
    const state = store.getState();
    Object.keys(state).map(
        (c, i) =>
            (document.querySelector(`#count${i + 1}-value`).innerText =
                state[c])
    );
};

// Redux subscriber to listen state change
store.subscribe(render);
