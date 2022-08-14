import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Stats from "./Components/Stats";

const initialStates = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    },
];

function App() {
    const [state, setState] = useState(initialStates);

    const totalCount = state.reduce((t, c) => t + c.count, 0);

    const incrementHandler = (id) => {
        const updatedState = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1,
                };
            } else {
                return c;
            }
        });
        setState(updatedState);
    };

    const decrementHandler = (id) => {
        const updatedState = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1,
                };
            } else {
                return {
                    ...c,
                };
            }
        });
        setState(updatedState);
    };

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {state.map((c) => (
                    <Counter
                        key={c.id}
                        id={c.id}
                        count={c.count}
                        incrementHandler={incrementHandler}
                        decrementHandler={decrementHandler}
                    />
                ))}
                <Stats count={totalCount} />
            </div>
        </div>
    );
}

export default App;
