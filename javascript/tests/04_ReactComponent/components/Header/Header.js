import React from 'react';
import { HeaderButtons } from './HeaderButtons';

export const Header = ({ increment, decrement, title, withHeaderButtons }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            {withHeaderButtons && <HeaderButtons increment={increment} decrement={decrement}/>}
        </div>
    );
};
