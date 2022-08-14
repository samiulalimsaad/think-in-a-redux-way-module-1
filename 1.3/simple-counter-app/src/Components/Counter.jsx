import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, id, incrementHandler, decrementHandler }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count} />
            <div className="flex space-x-3">
                <Button bg="bg-indigo-400" handler={() => incrementHandler(id)}>
                    Increment
                </Button>
                <Button bg="bg-red-400" handler={() => decrementHandler(id)}>
                    Decrement
                </Button>
            </div>
        </div>
    );
};

export default Counter;
