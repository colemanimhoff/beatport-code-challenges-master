import React from 'react';

export const SliderHeaderButtons = ({ increment, decrement }) => {
    return (
        <div>
            <button onClick={decrement}>
                <i className="fa fa-caret-left" aria-hidden="true" />
            </button>
            <button onClick={increment}>
                <i className="fa fa-caret-right" aria-hidden="true" />
            </button>
        </div>
    );
};
