// nodes

const counterContainerEl = document.querySelector("#counter-container");
const addCounterContainerEl = document.querySelector("#add-counter-container");
const resetCounterContainerEl = document.querySelector(
    "#reset-counter-container"
);
const count1ValueEl = document.querySelector("#count1-value");
const increment1El = document.querySelector("#increment1");
const decrement1El = document.querySelector("#decrement1");

addCounterContainerEl.onclick = () => {
    const elArray = counterContainerEl.children;
    const template = counterContainerEl.innerHTML;
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
                            onclick="incrementValue(${elArray.length + 1})"
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            >
                            Increment
                            </button>
                            <button
                            id="decrement${elArray.length + 1}"
                            onclick="decrementValue(${elArray.length + 1})"
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
                `;
};

resetCounterContainerEl.onclick = () => {
    console.log("reset");
};

// add event listeners to add child nodes
const incrementValue = (id) => {
    store.dispatch({
        type: INCREMENT,
        payload: { value: 5, name: "value" + id },
    });
    document.querySelector(`#count${id}-value`).innerText =
        store.getState()["value" + id];
};

const decrementValue = (id) => {
    store.dispatch({
        type: DECREMENT,
        payload: { value: 5, name: "value" + id },
    });
    document.querySelector(`#count${id}-value`).innerText =
        store.getState()["value" + id];
};
