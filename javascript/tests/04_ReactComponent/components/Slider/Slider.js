import React, { useState, useEffect } from 'react';
import './slider.scss';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */
export const Slider = ({ interval = 4, children = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    useEffect(() => {
        if (paused) {
            return;
        }
        const timer = setTimeout(() => {
            if (currentIndex === children.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }

        }, interval * 1000);
        return () => clearTimeout(timer);
    }, [interval, currentIndex, paused]);

    return (
        <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {Array.isArray(children) ? children[currentIndex] : children}
        </div>
    );
};