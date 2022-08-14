import React from "react";

const Button = ({ handler, bg, children }) => {
    return (
        <button
            className={`text-white px-3 py-2 rounded shadow ${bg}`}
            onClick={handler}
        >
            {children}
        </button>
    );
};

export default Button;
