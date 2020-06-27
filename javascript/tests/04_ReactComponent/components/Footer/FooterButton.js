import React from 'react';

export const FooterButton = ({ currentIndex, index, setManualIndex }) => {
    const handleOnClick = () => setManualIndex(index);
    return (
        <button
            className={currentIndex === index ? 'active' : ''}
            onClick={handleOnClick}
        />
    );
};
