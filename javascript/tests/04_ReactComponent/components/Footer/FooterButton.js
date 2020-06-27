import React from 'react';

export const FooterButton = ({ currentIndex, index }) => {
    return <button className={currentIndex === index ? 'active' : ''}/>;
};
