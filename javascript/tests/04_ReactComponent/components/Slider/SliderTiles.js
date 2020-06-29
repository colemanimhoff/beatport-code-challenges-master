import React from 'react';
import { SliderTile } from './SliderTile';

export const SliderTiles = ({ images }) => {
    return (
        <>
            {images.map(image => {
                return <SliderTile key={image.title} image={image}/>;
            })}
        </>
    );
};
