import React from 'react';
import { Tile } from './Tile';

export const Tiles = ({ images }) => {
    return (
        <div className="tiles-wrapper">
            {images.map(image => {
                return <Tile key={image.title} image={image}/>;
            })}
        </div>
    );
};
