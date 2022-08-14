const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

let count = 0;

const render = () => {
    counterEl.innerText = count;
};

incrementEl.onclick = () => {
    ++count;
    render();
};

decrementEl.onclick = () => {
    --count;
    render();
};
