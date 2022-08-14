import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((p) => p + 1);
    };

    const decrementHandler = () => {
        setCount((p) => p - 1);
    };

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
