import React from 'react';
import { FooterButton } from './FooterButton';

export const Footer = ({ childCount, currentIndex, setManualIndex }) => {
    const renderButtons = () => {
        let buttons = [];
        for (let i = 0; i < childCount; i++) {
            buttons.push(
                <FooterButton
                    currentIndex={currentIndex}
                    key={'footerbutton-' + i}
                    index={i}
                    setManualIndex={setManualIndex}
                />
            );
        }

        return buttons;
    };

    return <div className="footer">{renderButtons()}</div>;
};
