import React from 'react';
import { HeaderButtons } from './HeaderButtons';

export const Header = ({ increment, decrement, title }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <HeaderButtons increment={increment} decrement={decrement}/>
        </div>
    );
};
