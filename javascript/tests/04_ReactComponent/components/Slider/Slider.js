import React, { useState, useEffect } from 'react';
import './slider.scss';
import { Footer } from '../Footer';
import { Header } from '../Header';

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
 *
 * @param {number} interval in seconds (defaults to 4)
  * @param {string} title title of your slider (defaults to BEATPORT CHALLENGE)
  * @param {string} type options are large, small, or grid (defaults to large)
  * @param {boolean} withAutoIncrement (defaults to true)
  * @param {boolean} withHeaderButtons include prev and next header buttons (defaults to true)
  *
 */
export const Slider = ({ children = [], interval = 4, title = 'BEATPORT CHALLENGE', type = 'large', withAutoIncrement = true, withHeaderButtons = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);
    const setManualIndex = (index) => setCurrentIndex(index);

    const increment = () => {
        if (currentIndex === children.length - 1) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const decrement = () => {
        if (currentIndex === 0) {
            setCurrentIndex(children.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        if (paused || !withAutoIncrement) {
            return;
        }
        const timer = setTimeout(() => {
            increment();
        }, interval * 1000);
        return () => clearTimeout(timer);
    }, [interval, currentIndex, paused]);

    return (
        <div
            className="slider"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Header
                increment={increment}
                decrement={decrement}
                title={title}
                withHeaderButtons={withHeaderButtons}
            />
            <div className={'slider-content ' + type}>
                {Array.isArray(children) ? children[currentIndex] : children}
            </div>
            <Footer
                childCount={children.length}
                currentIndex={currentIndex}
                setManualIndex={setManualIndex}
            />
        </div>
    );
};
