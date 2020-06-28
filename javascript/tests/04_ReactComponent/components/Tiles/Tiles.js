import React from 'react';
import { Tile } from './Tile';

export const Tiles = ({ images }) => {
    return (
        <>
            {images.map(image => {
                return <Tile key={image.title} image={image}/>;
            })}
        </>
    );
};
