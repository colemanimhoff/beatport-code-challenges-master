import React from 'react';
import { SliderHeaderButtons } from './SliderHeaderButtons';

export const SliderHeader = ({ increment, decrement, title, withHeaderButtons }) => {
    return (
        <div className="slider-header">
            <h1>{title}</h1>
            {withHeaderButtons && <SliderHeaderButtons increment={increment} decrement={decrement}/>}
        </div>
    );
};
