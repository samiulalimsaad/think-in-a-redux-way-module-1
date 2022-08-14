const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

const counter2El = document.querySelector("#counter2");
const increment2El = document.querySelector("#increment2");
const decrement2El = document.querySelector("#decrement2");

let count = 0;
let count2 = 0;

const render = () => {
    counterEl.innerText = count;
};

const render2 = () => {
    counter2El.innerText = count2;
};

incrementEl.onclick = () => {
    ++count;
    render();
};

decrementEl.onclick = () => {
    --count;
    render();
};

increment2El.onclick = () => {
    ++count2;
    render2();
};

decrement2El.onclick = () => {
    --count2;
    render2();
};
