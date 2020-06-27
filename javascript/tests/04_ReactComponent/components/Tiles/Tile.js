import React from 'react';

export const Tile = ({ image }) => {
    const { url, title } = image;
    return (
        <div className="tile-wrapper">
            <img alt={title} src={url} title={title}/>
        </div>
    );
};
