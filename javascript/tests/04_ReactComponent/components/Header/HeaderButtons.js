import React from 'react';

export const HeaderButtons = ({ increment, decrement }) => {
    const handleDecrement = () => decrement();
    const handleIncrement = () => increment();
    return (
        <div>
            <button onClick={handleDecrement}>
                <i className="fa fa-caret-left" aria-hidden="true" />
            </button>
            <button onClick={handleIncrement}>
                <i className="fa fa-caret-right" aria-hidden="true" />
            </button>
        </div>
    );
};
